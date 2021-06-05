import React, { FunctionComponent, useContext } from "react";
import { AuthorContext } from "../../contexts";

interface FirstContextContainerProps { };

const FirstContextContainer: FunctionComponent<FirstContextContainerProps> = () => {

    const authorContext = useContext(AuthorContext);

    return (
        <React.Fragment>
            <h4>This is the first context content</h4>
            {authorContext?.messageStateVal}
        </React.Fragment>
    );
};

export default FirstContextContainer;
