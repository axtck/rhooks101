import { TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";

interface TextInputFormProps {
    fields: ITextFieldDef[];
};

const TextInputForm: FunctionComponent<TextInputFormProps> = ({ fields }) => (
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        {
            fields.map((f, i) => {
                return (
                    <TextField
                        key={i}
                        value={f.value}
                        name={f.name}
                        label={f.label}
                        margin="normal"
                        size="small"
                        variant="outlined"
                        onChange={f.onInputChange}
                    />
                );
            })
        }
    </form>
);

export default TextInputForm;
