import { Button } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent, MouseEvent, useState } from "react";
import ButtonGroupStacked from "../../components/Buttons/ButtonGroupStacked";
import TextInputForm from "../../components/Forms/TextInputForm";

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
        if (action === "+") return setCounter(counter + 1);
        if (action === "-") return setCounter(counter - 1);
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


    return (
        <React.Fragment>
            <div className="row">
                <h3>useState()</h3>
            </div>
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
            <div className="row mt-3">
                <h5>Syntax</h5>
            </div>
            <p>const [state, setState] = useState(initialState);</p>
            <div className="row mt-3">
                <h5>Usage</h5>
            </div>
            <p>setState(newState);</p>
            <div className="row mt-4">
                <div className="col-4">
                    <ButtonGroupStacked btnDefs={btnDefs} onBtnClick={handleCounterActionClick} />
                </div>
                <div className="col-8 text-center">
                    <h5>{counter}</h5>
                </div>
            </div>
            <div className="row mt-4">
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
            <div className="row mt-4">
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
