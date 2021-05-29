import React, { FunctionComponent, MouseEvent, useState } from "react";
import { Route, useHistory, useRouteMatch } from "react-router";
import { Switch } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Constants } from "../../constants";
import { AuthorContext } from "../../context";
import FirstContextContainer from "../../containers/Context/FirstContextContainer";
import SecondContextContainer from "../../containers/Context/SecondContextContainer";
import { Button } from "@material-ui/core";

interface UseContextPageProps { };

const UseContextPage: FunctionComponent<UseContextPageProps> = () => {

    // const [authorMessage, setAuthorMessage] = useState<string>(""); 

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
            <p>You can choose to create your context in a separate file and export so it is accessible.</p>
            <div className="border border-dark p-3 bg-soft text-center">
                <small><em>Imagine if this was a page that renders 2 different contents based on route</em></small>
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
                </div>
                <AuthorContext.Provider value={"hello"}>
                    <Switch>
                        <Route path={`${path}/first`} component={FirstContextContainer} />
                        <Route path={`${path}/second`} component={SecondContextContainer} />
                    </Switch>
                </AuthorContext.Provider>
            </div>
            <SyntaxHighlighter
                language="javascript"
                style={dracula}
                customStyle={Constants.highlightStyles}>
                {`import { createContext } from 'react';
export const AuthorContext = createContext(null);`}
            </SyntaxHighlighter>

        </React.Fragment>
    );
};

export default UseContextPage;
