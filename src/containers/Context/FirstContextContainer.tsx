import React, { FunctionComponent, useContext } from "react";
import { AuthorContext } from "../../context";

interface FirstContextContainerProps { };

const FirstContextContainer: FunctionComponent<FirstContextContainerProps> = () => {

    const message = useContext(AuthorContext);

    return (
        <React.Fragment>
            <h4>This is the first context content</h4>
            {message}
        </React.Fragment>
    );
};

export default FirstContextContainer;
