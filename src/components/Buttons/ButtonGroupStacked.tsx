import React, { FunctionComponent, MouseEvent } from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

interface ButtonGroupStackedProps {
    btnDefs: IActionBtnDef[];
    onBtnClick: (e: MouseEvent<HTMLButtonElement>, action: string) => void;
};

const ButtonGroupStacked: FunctionComponent<ButtonGroupStackedProps> = ({ btnDefs, onBtnClick }) => {

    const buttonsDisplay = btnDefs.map((btn, i) => {
        return (
            <Button
                key={i}
                onClick={(e) => onBtnClick(e, btn.action)}>
                {btn.label}
            </Button>
        );
    });

    return (
        <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical outlined primary button group">
            {buttonsDisplay}
        </ButtonGroup>
    );
};

export default ButtonGroupStacked;
