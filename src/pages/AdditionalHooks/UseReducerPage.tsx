import React, { FunctionComponent, MouseEvent, useReducer } from "react";
import { useHistory } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ButtonGroupStacked from "../../components/Buttons/ButtonGroupStacked";
import { Constants } from "../../constants";

enum ActionType {
    Increase = "INCREASE",
    Decrease = "DECREASE"
}

interface ICounterState {
    value: number;
}

const initialCounterState: ICounterState = {
    value: 0
};

interface ICounterAction {
    type: ActionType,
    payload: number;
}

const increaseAction: ICounterAction = {
    type: ActionType.Increase,
    payload: 1
};

const decreaseAction: ICounterAction = {
    type: ActionType.Decrease,
    payload: 1
};

const counterReducer = (state: ICounterState, action: ICounterAction): ICounterState => {
    const { type, payload } = action;

    switch (type) {
        case ActionType.Increase:
            return {
                ...state,
                value: state.value + payload
            };
        case ActionType.Decrease:
            return {
                ...state,
                value: state.value - payload
            };
        default:
            return state;
    }
};


interface UseReducerPageProps { };

const UseReducerPage: FunctionComponent<UseReducerPageProps> = () => {

    const [counter, dispatch] = useReducer(counterReducer, initialCounterState);

    const history = useHistory();

    const handleRouteClick = (route: string) => {
        history.push(`/hooks/${route}`);
    };

    const handleCounterActionClick = (e: MouseEvent<HTMLButtonElement>, action: string) => {
        e.preventDefault();
        if (action !== "+" && action !== "-") return;
        if (action === "+") dispatch(increaseAction);
        if (action === "-") dispatch(decreaseAction);
    };

    const btnDefs: IActionBtnDef[] = [
        {
            label: "increase",
            action: "+"
        },
        {
            label: "decrease",
            action: "-"
        }
    ];

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

            <h5 className="mt-3">Examples</h5>
            <p>This is how you would handle a counter with a reducer.</p>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
            <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
        </>
    );
};`}
            </SyntaxHighlighter>
            <div className="row">
                <div className="col-4">
                    <ButtonGroupStacked btnDefs={btnDefs} onBtnClick={handleCounterActionClick} />
                </div>
                <div className="col-8 text-center">
                    <h5>{counter.value}</h5>
                </div>
            </div>

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
                If you’re doing expensive calculations while rendering, you can optimize them with <span className="link-success" role="button" onClick={() => handleRouteClick("useMemo")}>useMemo</span>.
            </p>
        </React.Fragment>
    );
};

export default UseReducerPage;
