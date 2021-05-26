import React, { FunctionComponent, MouseEvent } from "react";
import { useHistory } from "react-router";
import CachedIcon from '@material-ui/icons/Cached';

interface TopbarProps { };

const Topbar: FunctionComponent<TopbarProps> = () => {

    const history = useHistory();

    // routes and labels
    const routes: IRouteLink[] = [
        {
            route: "/home",
            label: "Home",
        }
    ];

    const handleLinkClick = (e: MouseEvent<HTMLButtonElement>, route: string) => {
        e.preventDefault();
        history.push(route);
    };

    const handleTitleClick = (e: MouseEvent) => {
        e.preventDefault();
        history.push("/home");
    };

    /**********
     * Render
    ***********/

    const navLis = routes.map((r, i) => {
        return <li key={i} className="nav-item">
            <button
                className="btn nav-link text-white shadow-none"
                onClick={(e) => handleLinkClick(e, r.route)}>
                {r.label}
            </button>
        </li>;
    });

    return (
        <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
            <div className="container">
                <h3
                    className="navbar-brand my-2 text-react"
                    onClick={handleTitleClick}>
                    React Hooks 101 <CachedIcon style={{ color: "white" }} />
                </h3>
                <ul className="navbar-nav">
                    {navLis}
                </ul>
            </div>
        </nav>
    );
};

export default Topbar;
