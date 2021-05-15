import React, { FunctionComponent, MouseEvent } from "react";
import { useHistory } from "react-router";

interface TopbarProps { };

const Topbar: FunctionComponent<TopbarProps> = () => {

    const history = useHistory();

    // routes and labels
    const routes: RouteLink[] = [
        {
            route: "/home",
            label: "Home",
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
        return <li key={i} className="nav-item">
            <button
                className="btn nav-link text-white"
                onClick={(e) => handleLinkClick(e, r.route)}>
                {r.label}
            </button>
        </li>;
    });

    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-primary mb-3">
            <div className="container">
                <a className="navbar-brand" href="/home">React Hooks 101</a>
                <ul className="navbar-nav">
                    {navLis}
                </ul>
            </div>
        </nav>
    );
};

export default Topbar;
