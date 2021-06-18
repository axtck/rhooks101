import React, { FunctionComponent, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Constants } from "../../constants";

interface UseReducerPageProps { };

const UseReducerPage: FunctionComponent<UseReducerPageProps> = () => {

    const history = useHistory();

    const handleRouteClick = (e: MouseEvent<HTMLSpanElement>, route: string) => {
        history.push(`/hooks/${route}`);
    };

    return (
        <React.Fragment>
            <h3>useReducer()</h3>
            <h4 className="mt-4">Intro</h4>
            <h5 className="mt-3">Reducers</h5>
            <p>A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change. We have tools, like Redux, that help manage an application’s state changes in a single store so that they behave consistently.</p>
            <h5 className="mt-3">useReducer()</h5>
            <p>
                An alternative to useState. Accepts a reducer of type (state, action) {`=>`} newState, and returns the current state paired with a dispatch method.
                useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
            </p>
            <h5 className="mt-3">State parameter</h5>
            <p>The state parameter that gets passed to the reducer function has to be the current state of the application.</p>
            <h5 className="mt-3">Action parameter</h5>
            <p>
                An action is an object that contains two keys and their values. The state update that happens in the reducer is always dependent on the value of action.type.
                There is typically a payload value that contains what the user is sending and would be used to update the state of the application. It is important to note that action.type is required, but action.payload is optional.
                Making use of payload brings a level of structure to how the action object looks like.
            </p>
            <h5 className="mt-3">Syntax</h5>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [state, dispatch] = useReducer(reducer, initialArg, init);`}
            </SyntaxHighlighter>
            <h4 className="mt-4">Extra</h4>
            <h5 className="mt-3">Lazy initialization</h5>
            <p>
                You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).
                It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action.
            </p>
            <h5 className="mt-3">Bailing out of a dispatch</h5>
            <p>
                If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)
                Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree.
                If you’re doing expensive calculations while rendering, you can optimize them with <span className="link-success" role="button" onClick={(e) => handleRouteClick(e, "useMemo")}>useMemo</span>.
            </p>
        </React.Fragment>
    );
};

export default UseReducerPage;
