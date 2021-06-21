import React, { ChangeEvent, FunctionComponent, useContext } from "react";
import TextInputForm from "../../components/Forms/TextInputForm";
import { ExampleContext } from "../../contexts";

interface SecondContextContainerProps { };

const SecondContextContainer: FunctionComponent<SecondContextContainerProps> = () => {

    const exampleContext = useContext(ExampleContext);

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        exampleContext?.setMessageStateVal(e.target.value);
    };

    const textFields: ITextFieldDef[] = [
        {
            name: "message",
            label: "Message",
            value: exampleContext?.messageStateVal || "",
            onInputChange: handleMessageChange
        }
    ];

    return (
        <React.Fragment>
            <h4>This is the second context content</h4>
            <p>Share a message with the other pages!</p>
            <TextInputForm fields={textFields} />
            <h5 className="mt-2">Current background color is {exampleContext.hexStateVal}</h5>
        </React.Fragment>
    );
};

export default SecondContextContainer;
