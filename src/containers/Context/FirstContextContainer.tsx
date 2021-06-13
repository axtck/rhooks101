import React, { FunctionComponent, useContext } from "react";
import { ExampleContext } from "../../contexts";

interface FirstContextContainerProps { };

const FirstContextContainer: FunctionComponent<FirstContextContainerProps> = () => {

    const exampleContext = useContext(ExampleContext);

    return (
        <React.Fragment>
            <h4>This is the first context content</h4>
            {exampleContext?.messageStateVal}
        </React.Fragment>
    );
};

export default FirstContextContainer;
