import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import HomePage from "../pages/HomePage";
import HooksPage from "../pages/HooksPage";

interface MainRoutesProps { };

const MainRoutes: FunctionComponent<MainRoutesProps> = () => (
    <Switch>
        {/* hooks routes */}
        <Route path="/hooks/:hook" component={HooksPage} />

        {/* other routes */}
        <Route path="/home" component={HomePage} />

        {/* redirects */}
        <Redirect to="/home" />
    </Switch>
);

export default MainRoutes;
