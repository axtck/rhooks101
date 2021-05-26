import React, { FunctionComponent, SyntheticEvent, MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ErrorAlert from "../../components/Alerts/ErrorAlert";
import ButtonGroupStacked from "../../components/Buttons/ButtonGroupStacked";
import { Constants } from "../../constants";
import PersonCard from "../../components/Cards/PersonCard";
import LoadingScreen from "../../screens/LoadingScreen";


interface UseEffectPageProps { };

const UseEffectPage: FunctionComponent<UseEffectPageProps> = () => {
    const [counter, setCounter] = useState(0);
    const [counterUpdates, setCounterUpdates] = useState(0);

    const [randomUser, setRandomUser] = useState<IRandomPerson | null>(null);
    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const [mousePosition, setMousePosition] = useState<MouseEvent>();

    const history = useHistory();

    useEffect(() => {
        setCounterUpdates(prevState => prevState + 1);
    }, [counter]);


    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            setMousePosition(e);
        };

        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [mousePosition]);

    useEffect(() => {
        axios
            .get<IRandomPerson>("https://randomuser.me/api/")
            .then((res) => setRandomUser(res.data))
            .catch(() => setOpenAlert(true));
    }, []);


    const handleCounterActionClick = (e: ReactMouseEvent<HTMLButtonElement>, action: string): void => {
        e.preventDefault();
        if (action !== "+" && action !== "-") return;
        if (action === "+") setCounter(prevState => prevState + 1);
        if (action === "-") setCounter(prevState => prevState - 1);
    };

    const handleLinkToUseLayoutEffect = (e: ReactMouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        history.push("/hooks/useLayoutEffect");
    };

    const handleAlertClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    const btnDefs: IActionBtnDef[] = [
        {
            label: "ADD",
            action: "+"
        },
        {
            label: "SUBTRACT",
            action: "-"
        }
    ];

    if (randomUser == null) {
        return <LoadingScreen />;
    }

    return (
        <React.Fragment>
            <h3>useEffect()</h3>
            <h4 className="mt-4">Intro</h4>
            <h5 className="mt-3">Effects</h5>
            <p>
                The Effect Hook lets you perform side effects in function components, it accepts a function that contains imperative,
                possibly effectful code. Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component.
                Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen.
            </p>
            <h5 className="mt-3">When do effects take place?</h5>
            <p>
                By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
            </p>
            <h5 className="mt-3">React class lifecycle methods vs useEffect hook</h5>
            <p>
                If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
                Note that they are not completely the same thing, hooks are a paradigm shift from thinking in terms of ”lifecycles and time” to thinking in terms of
                ”state and synchronization with DOM”.
            </p>
            <h5 className="mt-3">componentDidMount() with useEffect()</h5>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`useEffect(() => {
    console.log("On mount");
}, []);`}
            </SyntaxHighlighter>
            <h5 className="mt-3">componentDidUpdate() with useEffect()</h5>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`useEffect(() => {
    console.log("Update");
});`}
            </SyntaxHighlighter>
            <h5 className="mt-3">componentWillUnMount() with useEffect()</h5>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`useEffect(() => {
    const subscription = source.subscribe(); // subscribe
    return () => {
        console.log("Unmount");
        subscription.unsubscribe(); // clean up the subscription
    };
});`}
            </SyntaxHighlighter>
            <h5 className="mt-3">Cleaning up an effect</h5>
            <p>
                Often, effects create resources that need to be cleaned up before the component leaves the screen,
                such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function. For example,
                to create a subscription. The clean-up function runs before the component is removed from the UI to prevent memory leaks. Additionally,
                if a component renders multiple times (as they typically do), the previous effect is cleaned up before executing the next effect
                (see componentWillUnMount example).
            </p>
            <h5 className="mt-3">Timing of effects</h5>
            <p>
                Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, during a deferred event.
                This makes it suitable for the many common side effects, like setting up subscriptions and event handlers, because most types of work shouldn’t
                block the browser from updating the screen.
            </p>
            <p>
                However, not all effects can be deferred. For example, a DOM mutation that is visible to the user must fire synchronously before the next
                paint so that the user does not perceive a visual inconsistency. (The distinction is conceptually similar to passive versus active event listeners.)
                For these types of effects, React provides one additional Hook called <span className="link-success" onClick={handleLinkToUseLayoutEffect}>useLayoutEffect</span>.
                It has the same signature as useEffect, and only differs in when it is fired.
            </p>
            <p>
                Although useEffect is deferred until after the browser has painted, it’s guaranteed to fire before any new renders. React will always flush a previous render’s effects before starting a new update.
            </p>
            <h5 className="mt-5">Conditionally firing an effect</h5>
            <p>
                The default behavior for effects is to fire the effect after every completed render. That way an effect is always recreated if one of its dependencies changes.
                However, this may be overkill in some cases, like the subscription example from the previous section. We don’t need to create a new subscription on every update, only if the source prop has changed.
                To implement this, pass a second argument to useEffect that is the array of values that the effect depends on.
            </p>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`useEffect(() => {
    const subscription = props.source.subscribe();
}, [props.source]);`}
            </SyntaxHighlighter>
            <h5 className="mt-5">Some examples</h5>
            <h6 className="mt-3">Count state variable updates</h6>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [counter, setCounter] = useState(0);
const [counterUpdates, setCounterUpdates] = useState(0);

// counter handler
const handleCounterActionClick = (e, action) => {
    e.preventDefault(); // prevent default 
    if (action === "+") setCounter(prevState => prevState + 1); // add / subtract according to action param
    if (action === "-") setCounter(prevState => prevState - 1);
};

// effect
useEffect(() => {
    setCounterUpdates(prevState => prevState + 1); // + 1 everytime the counter state variable is updated
}, [counter]); // pass counter in dependency array`}
            </SyntaxHighlighter>
            <div className="row mt-3">
                <div className="col-4">
                    <h5>Total counter updates</h5>
                </div>
                <div className="col-8 text-center">
                    <h5>{counterUpdates}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <ButtonGroupStacked btnDefs={btnDefs} onBtnClick={handleCounterActionClick} />
                </div>
                <div className="col-8 text-center">
                    <h5>{counter}</h5>
                </div>
            </div>
            <h6 className="mt-5">Fetch data from API on mount</h6>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`useEffect(() => {
    axios // use axios to do a GET request
        .get("https://randomuser.me/api/") // specify api url 
        .then((res) => setRandomUser(res.data)) // set state to res.data
        .catch(() => setOpenAlert(true)); // if fails, open popup
}, []);`}
            </SyntaxHighlighter>
            <div className="row mt-3 justify-content-center text-center">
                <PersonCard person={randomUser} />
                <small><em>This person was fetched on mount (sorry for poor image quality)</em></small>
            </div>
            <h6 className="mt-5">Mouse position</h6>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [mousePosition, setMousePosition] = useState();
useEffect(() => {
    // handler for mouse move event
    const onMouseMove = (e) => {
        e.preventDefault();
        setMousePosition(e); // set state 
    };

    // add eventlistener on mount
    window.addEventListener("mousemove", onMouseMove);

    return () => {
        // remove eventlistener in cleanup
        window.removeEventListener("mousemove", onMouseMove);
    };
}, [mousePosition]);`}
            </SyntaxHighlighter>
            <p>X: {mousePosition?.clientX} Y: {mousePosition?.clientY}</p>
            <ErrorAlert onClose={handleAlertClose} openAlert={openAlert} />
        </React.Fragment>
    );
};

export default UseEffectPage;
