import React, { ChangeEvent, FunctionComponent, useContext } from "react";
import TextInputForm from "../../components/Forms/TextInputForm";
import { AuthorContext } from "../../contexts";

interface SecondContextContainerProps { };

const SecondContextContainer: FunctionComponent<SecondContextContainerProps> = () => {

    const authorContext = useContext(AuthorContext);

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        authorContext?.setMessageStateVal(e.target.value);
    };

    const textFields: ITextFieldProps[] = [
        {
            name: "message",
            label: "Message",
            value: authorContext?.messageStateVal || "",
            onInputChange: handleMessageChange
        }
    ];

    return (
        <React.Fragment>
            <h4>This is the second context content</h4>
            <p>Share a message with the other pages!</p>
            <TextInputForm fields={textFields} />
            <h5 className="mt-2">Current background color is {authorContext.hexStateVal}</h5>
        </React.Fragment>
    );
};

export default SecondContextContainer;
