import React, { FunctionComponent, MouseEvent } from "react";
import { useHistory } from "react-router";

interface SidebarLeftProps { };

const SidebarLeft: FunctionComponent<SidebarLeftProps> = () => {

    const history = useHistory();

    // routes and labels
    const routes: RouteLink[] = [
        {
            route: "/first",
            label: "first",
        },
        {
            route: "/second",
            label: "second",
        }
    ];

    const handleLinkClick = (e: MouseEvent<HTMLButtonElement>, route: string) => {
        e.preventDefault();
        history.push(route);
    };

    /**********
     * Render
    ***********/

    const navLis = routes.map((r, i) => {
        return (
            <button
                key={i}
                className="btn nav-link"
                onClick={(e) => handleLinkClick(e, r.route)}>
                {r.label}
            </button>
        );
    });

    return (
        <React.Fragment>
            {navLis}
        </React.Fragment>
    );
};

export default SidebarLeft;
