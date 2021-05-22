import React, { FunctionComponent } from "react";

interface LoadingScreenProps { };

const LoadingScreen: FunctionComponent<LoadingScreenProps> = () => {

    return (
        <React.Fragment>
            <h3>Loading</h3>
            <p>Thank you for your patience</p>
        </React.Fragment>
    );
};

export default LoadingScreen;
