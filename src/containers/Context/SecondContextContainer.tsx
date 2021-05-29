import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent } from "react";

interface SecondContextContainerProps { };

const SecondContextContainer: FunctionComponent<SecondContextContainerProps> = () => {

    const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();


    };

    return (
        <React.Fragment>
            <h4>This is the second context content</h4>
            <p>Send a message to the first page!</p>
            <TextField
                margin="normal"
                size="small"
                name="name"
                label="Name"
                variant="outlined"
                onChange={handleMessageChange} />      </React.Fragment>
    );
};

export default SecondContextContainer;
