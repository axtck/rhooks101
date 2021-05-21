import { Button } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent, MouseEvent, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import ButtonGroupStacked from "../../components/Buttons/ButtonGroupStacked";
import TextInputForm from "../../components/Forms/TextInputForm";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Constants } from "../../constants";
import { useHistory } from "react-router";

interface UseStatePageProps { };

const UseStatePage: FunctionComponent<UseStatePageProps> = () => {

    const [counter, setCounter] = useState(0);
    const [displayText, setDisplayText] = useState(false);

    interface IInputValues {
        name: string;
        age: number;
    }

    const initialInputValues: IInputValues = {
        name: "",
        age: 0
    };

    const [inputValues, setInputValues] = useState<IInputValues>(initialInputValues);

    const history = useHistory();

    const handleCounterActionClick = (e: MouseEvent<HTMLButtonElement>, action: string): void => {
        e.preventDefault();
        if (action !== "+" && action !== "-") return;
        if (action === "+") setCounter(prevState => prevState + 1);
        if (action === "-") setCounter(prevState => prevState - 1);
    };

    const handleToggleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setDisplayText(!displayText);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const handleLinkToUseRef = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        history.push("/hooks/useRef");
    };

    const handleLinkToUseMemo = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();
        history.push("/hooks/useMemo");
    };


    /**********
     * Render
     **********/

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

    const textDisplay = displayText ? <h3>Some text</h3> : null;

    return (
        <React.Fragment>
            <h3>useState()</h3>
            <h4 className="mt-4">Intro</h4>
            <h5 className="mt-3">What does calling useState do?</h5>
            <p>
                It declares a state variable, when a state variable is updated, it causes the component to re-render.
                The only argument to the useState() Hook is the initial state.
                It returns a pair of values: the current state and a function that updates it.
            </p>
            <h5 className="mt-3">When to use state</h5>
            <p>
                A state update causes the component to re-render, so you should use state variables for data that
                gets displayed and needs to get updated. You can also pass state variables as props for other components.
            </p>
            <h5 className="mt-3">When not to use state</h5>
            <p>
                You should not use state if you are just storing data and not using it for rendering or passing it as props to
                other components. Whenever the state value changes, React will re-render the component and also all its child
                components will get re-rendered. It is important to avoid unnecessary rerenders.
                If you want to store data but don’t want to re-render the app, then you can use
                the <span className="link-success" onClick={handleLinkToUseRef}>useRef</span> hook provided by React.
            </p>
            <h5 className="mt-5">Syntax</h5>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                const [state, setState] = useState(initialState);
            </SyntaxHighlighter>
            <div className="row mt-3">
                <h5>Usage</h5>
            </div>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                setState(newState);
            </SyntaxHighlighter>
            <h5 className="mt-5">Some examples</h5>
            <h6 className="mt-4">Toggle display</h6>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [displayText, setDisplayText] = useState(false); // set false as initial value\n
const handleToggleClick = (e) => {
    e.preventDefault();
    setDisplayText(!displayText); // toggle false / true
};`}
            </SyntaxHighlighter>
            <div className="row">
                <div className="col-4">
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleToggleClick}>
                        TOGGLE
                    </Button>
                </div>
                <div className="col-8 text-center">
                    {textDisplay}
                </div>
            </div>
            <h6 className="mt-4">Update multiple inputs</h6>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [inputValues, setInputValues] = useState({name: "", age: 0}); // set initial values\n
const handleInputChange = (e) => {
    e.preventDefault();
    setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value // use name as key and value as value
    });
};`}
            </SyntaxHighlighter>
            <div className="row">
                <div className="col-4">
                    <TextInputForm onInputChange={handleInputChange} />
                </div>
                <div className="col-8 text-center">
                    <p>{inputValues.name} {inputValues.age}</p>
                </div>
            </div>
            <h4 className="mt-4">Extra</h4>
            <h5 className="mt-3">Functional updates</h5>
            <p>
                If the new state is computed using the previous state, you can pass a function to setState.
                The function will receive the previous value, and return an updated value.
            </p>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [counter, setCounter] = useState(0); // set 0 as initial value\n
// imagine we have a button click handler that receives an event and an action
const handleCounterActionClick = (e, action) => {
    e.preventDefault(); // prevent default 
    if (action === "+") setCounter(prevState => prevState + 1); // add / subtract according to action param
    if (action === "-") setCounter(prevState => prevState - 1);
};`}
            </SyntaxHighlighter>
            <div className="row">
                <div className="col-4">
                    <ButtonGroupStacked btnDefs={btnDefs} onBtnClick={handleCounterActionClick} />
                </div>
                <div className="col-8 text-center">
                    <h5>{counter}</h5>
                </div>
            </div>
            <p className="mt-3">
                The ”ADD” and ”SUBTRACT” buttons use the functional form, because the updated value is based on the previous value.
            </p>
            <h5 className="mt-3">Lazy initial state</h5>
            <p>
                The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded.
                If the initial state is the result of an expensive computation, you may provide a function instead, which will
                be executed only on the initial render
            </p>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});`}
            </SyntaxHighlighter>
            <h5 className="mt-3">Bailing out of a state update</h5>
            <p className="mt-3 mb-5">
                If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects.
                (React uses the Object.is comparison algorithm.) Note that React may still need to render that specific component again before bailing out.
                That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. If you’re doing expensive calculations while rendering,
                you can optimize them with <span className="link-success" onClick={handleLinkToUseMemo}>useMemo</span>
            </p>
        </React.Fragment>
    );
};

export default UseStatePage;
