import { TextField } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent } from "react";

interface TextInputFormProps {
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInputForm: FunctionComponent<TextInputFormProps> = ({ onInputChange }) => {

    return (
        <form autoComplete="off">
            <TextField
                margin="normal"
                size="small"
                name="name"
                label="Name"
                variant="outlined"
                onChange={onInputChange}
            />
            <TextField
                margin="normal"
                size="small"
                name="age"
                label="Age"
                variant="outlined"
                onChange={onInputChange}
            />
        </form>
    );
};

export default TextInputForm;
