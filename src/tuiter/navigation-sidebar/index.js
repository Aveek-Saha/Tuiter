import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split("/");
    const active = paths[2];
    console.log(active);
    return (
        <div className="list-group">
            <a href="/tuiter/home" className="list-group-item">
                Tuiter
            </a>
            <Link
                to="/tuiter/home"
                className={`list-group-item ${
                    active === "home" || active === "" || active == undefined
                        ? "active"
                        : ""
                }`}
            >
                Home
            </Link>
            <Link
                to="/tuiter/explore"
                className={`list-group-item ${
                    active === "explore" ? "active" : ""
                }`}
            >
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a
                href="/tuiter/notifications"
                className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
            >
                Notifications
            </a>
            <a
                href="/tuiter/messages"
                className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
            >
                Messages
            </a>
            <a
                href="/tuiter/bookmarks"
                className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
            >
                Bookmarks
            </a>
            <a
                href="/tuiter/lists"
                className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
            >
                Lists
            </a>
            <a
                href="/tuiter/profile"
                className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
            >
                Profile
            </a>
            <a
                href="/tuiter/more"
                className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
            >
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;
