import { Button } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent, MouseEvent, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import ButtonGroupStacked from "../../components/Buttons/ButtonGroupStacked";
import TextInputForm from "../../components/Forms/TextInputForm";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

    const handleCounterActionClick = (e: MouseEvent<HTMLButtonElement>, action: string): void => {
        e.preventDefault();
        if (action !== "+" && action !== "-") return;
        if (action === "+") setCounter(counter + 1);
        if (action === "-") setCounter(counter - 1);
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

    const highlightStyles = {
        "borderRadius": "5px"
    }

    return (
        <React.Fragment>
            <h3>useState()</h3>
            <h5 className="mt-3">What does calling useState do?</h5>
            <p>
                It declares a “state variable”. Our variable is called count but we could call it anything else,
                like banana. This is a way to “preserve” some values between the function calls —
                useState is a new way to use the exact same capabilities that this.state provides in a class. Normally,
                variables “disappear” when the function exits but state variables are preserved by React.
            </p>
            <h5 className="mt-3">What do we pass to useState as an argument?</h5>
            <p>
                The only argument to the useState() Hook is the initial state. Unlike with classes,
                the state doesn’t have to be an object. We can keep a number or a string if that’s all we need.
                In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable.
                (If we wanted to store two different values in state, we would call useState() twice.)
            </p>
            <h5 className="mt-3">What does useState return?</h5>
            <p>
                It returns a pair of values: the current state and a function that updates it.
            </p>
            <h5 className="mt-5">Syntax</h5>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={highlightStyles}>
                const [state, setState] = useState(initialState);
            </SyntaxHighlighter>
            <div className="row mt-3">
                <h5>Usage</h5>
            </div>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={highlightStyles}>
                setState(newState);
            </SyntaxHighlighter>
            <h5 className="mt-5">Some examples</h5>
            <h6 className="mt-4">Counter</h6>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={highlightStyles}>
                {`const [counter, setCounter] = useState(0); // set 0 as initial value\n
const handleCounterActionClick = (e, action) => {
    e.preventDefault(); // prevent the default action
    if (action === "+") setCounter(counter + 1); // add / subtract according to action param
    if (action === "-") setCounter(counter - 1);
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
            <h6 className="mt-4">Toggle display</h6>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={highlightStyles}>
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
                customStyle={highlightStyles}>
                {`const [inputValues, setInputValues] = useState({name: "", age: 0}); // set initial values
const handleInputChange = (e) => {
    e.preventDefault();
    setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value // use name as key and value as value
    });
};`}
            </SyntaxHighlighter>
            <div className="row mb-5">
                <div className="col-4">
                    <TextInputForm onInputChange={handleInputChange} />
                </div>
                <div className="col-8 text-center">
                    <p>{inputValues.name} {inputValues.age}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UseStatePage;
