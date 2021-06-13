import React, { FunctionComponent, MouseEvent, useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router";
import { Switch } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Constants } from "../../constants";
import { ExampleContext } from "../../contexts";
import FirstContextContainer from "../../containers/Context/FirstContextContainer";
import SecondContextContainer from "../../containers/Context/SecondContextContainer";
import { Button } from "@material-ui/core";
import ThirdContextContainer from "../../containers/Context/ThirdContextContainer";

interface UseContextPageProps { };

const UseContextPage: FunctionComponent<UseContextPageProps> = () => {

    const [message, setMessage] = useState<string>("");
    const [hex, setHex] = useState<string>("");

    const { path, url } = useRouteMatch();
    const history = useHistory();

    const handleClickContent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        history.push(`${url}/${e.currentTarget.id}`);
    };

    return (
        <React.Fragment>
            <h3>useContext()</h3>
            <h4 className="mt-4">Intro</h4>
            <h5 className="mt-3">Context API</h5>
            <p>
                The Context API is a React structure that allows you to share specific data from all levels of your application without having to pass props down manually at every level.
            </p>
            <p>
                In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme)
                that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
            </p>
            <h5 className="mt-3">When to use context</h5>
            <p>
                Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
                Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
            </p>
            <h5 className="mt-3">createContext()</h5>
            <p>
                Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
            </p>
            <p>
                The defaultValue argument (null) is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them.
                Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.
            </p>
            <p>It is a good idea to create the context in a separate file and export it.</p>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`import { createContext } from 'react';
export const ExampleContext = createContext(null); // initial value`}
            </SyntaxHighlighter>
            <h5 className="mt-3">Context Provider</h5>
            <p>Provide the context to the child components, in this case the children are routes inside a React Router switch.</p>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const [message, setMessage] = useState(""); // state values for message and background color
const [hex, setHex] = useState("");

// provide the context and pass values
<ExampleContext.Provider value={{ message, setMessage, hex, setHex }}>
    <Switch>
        <Route path={\`${path}/first\`} component={FirstContextContainer} />
        <Route path={\`${path}/second\`} component={SecondContextContainer} />
        <Route path={\`${path}/third\`} component={ThirdContextContainer} />
    </Switch>
</ExampleContext.Provider>`}
            </SyntaxHighlighter>
            <h5 className="mt-3">useContext()</h5>
            <p>Call the useContext hook and specify which context to use. Now, the values provided by the provider are accessible and can be updated from each component.</p>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`const exampleContext = useContext(ExampleContext); // call useContext for the ExampleContext

// example on how the shared state can be updated
const handleMessageChange = (e) => {
    e.preventDefault();
    exampleContext?.setMessageStateVal(e.target.value);
};

// use and update the contexts values 
<React.Fragment>
    <h4>This is the first context content</h4>
    {exampleContext?.message}
</React.Fragment>`}
            </SyntaxHighlighter>
            <h5 className="mt-3">Result</h5>
            <div className="border border-dark p-3 text-center mb-3 rounded" style={{ backgroundColor: hex }}>
                <small><em>Imagine if this was a page that renders 3 different contents based on route</em></small>
                <div className="row mb-3 mt-2">
                    <div className="col">
                        <Button variant="contained" color="primary" id="first" onClick={handleClickContent}>
                            first content
                        </Button>
                    </div>
                    <div className="col">
                        <Button variant="contained" color="primary" id="second" onClick={handleClickContent}>
                            second content
                        </Button>
                    </div>
                    <div className="col">
                        <Button variant="contained" color="primary" id="third" onClick={handleClickContent}>
                            third content
                        </Button>
                    </div>
                </div>
                <ExampleContext.Provider value={{
                    messageStateVal: message, setMessageStateVal: setMessage,
                    hexStateVal: hex, setHexStateVal: setHex
                }}>
                    <Switch>
                        <Route path={`${path}/first`} component={FirstContextContainer} />
                        <Route path={`${path}/second`} component={SecondContextContainer} />
                        <Route path={`${path}/third`} component={ThirdContextContainer} />
                    </Switch>
                </ExampleContext.Provider>
            </div>
        </React.Fragment>
    );
};

export default UseContextPage;
