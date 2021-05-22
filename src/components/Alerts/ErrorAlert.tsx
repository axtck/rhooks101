import React, { FunctionComponent, SyntheticEvent } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface ErrorAlertProps {
    openAlert: boolean;
    onClose: (event?: SyntheticEvent, reason?: string) => void;
};

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ErrorAlert: FunctionComponent<ErrorAlertProps> = ({ openAlert, onClose }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={onClose}>
                <Alert onClose={onClose} severity="error">
                    Error! Something went wrong...
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ErrorAlert;
