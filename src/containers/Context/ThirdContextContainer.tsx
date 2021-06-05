import { Button } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent, MouseEvent, useContext } from "react";
import TextInputForm from "../../components/Forms/TextInputForm";
import { AuthorContext } from "../../contexts";
import { generateHexColor } from "../../utils/functions";

interface ThirdContextContainerProps { };

const ThirdContextContainer: FunctionComponent<ThirdContextContainerProps> = () => {
    const authorContext = useContext(AuthorContext);

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        authorContext?.setMessageStateVal(e.target.value);
    };

    const handleBackGroundColorClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        authorContext.setHexStateVal(generateHexColor());
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
            <h4>This is the third context content</h4>
            <p>Share a message with the other pages!</p>
            <TextInputForm fields={textFields} />
            <Button variant="contained" color="primary" id="third" onClick={handleBackGroundColorClick}>
                generate rgb
            </Button>
        </React.Fragment>
    );
};

export default ThirdContextContainer;
