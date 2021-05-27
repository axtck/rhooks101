import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import UseCallbackPage from "../pages/AdditionalHooks/UseCallbackPage";
import UseDebugValuePage from "../pages/AdditionalHooks/UseDebugValuePage";
import UseImperativeHandlePage from "../pages/AdditionalHooks/UseImperativeHandlePage";
import UseLayoutEffectPage from "../pages/AdditionalHooks/UseLayoutEffectPage";
import UseMemoPage from "../pages/AdditionalHooks/UseMemoPage";
import UseReducerPage from "../pages/AdditionalHooks/UseReducerPage";
import UseRefPage from "../pages/AdditionalHooks/UseRefPage";
import ContextPage from "../pages/BasicHooks/ContextPage";
import UseContextPage from "../pages/BasicHooks/UseContextPage";
import UseEffectPage from "../pages/BasicHooks/UseEffectPage";
import UseStatePage from "../pages/BasicHooks/UseStatePage";
import HomePage from "../pages/HomePage";

interface MainRoutesProps { };

const MainRoutes: FunctionComponent<MainRoutesProps> = () => (
    <Switch>
        {/* hooks routes */}
        <Route path="/hooks/useState" component={UseStatePage} />
        <Route path="/hooks/useEffect" component={UseEffectPage} />
        <Route path="/hooks/useContext" component={UseContextPage} />
        <Route path="/hooks/useReducer" component={UseReducerPage} />
        <Route path="/hooks/useCallback" component={UseCallbackPage} />
        <Route path="/hooks/useMemo" component={UseMemoPage} />
        <Route path="/hooks/useRef" component={UseRefPage} />
        <Route path="/hooks/useImperativeHandle" component={UseImperativeHandlePage} />
        <Route path="/hooks/useLayoutEffect" component={UseLayoutEffectPage} />
        <Route path="/hooks/useDebugValue" component={UseDebugValuePage} />

        {/* other routes */}
        <Route path="/home" component={HomePage} />
        <Route path="/context" component={ContextPage} />

        {/* redirects */}
        <Redirect to="/home" />
    </Switch>
);

export default MainRoutes;
