import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Outlet } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();


    return (
        <div>
            Menu:

            <div>
                <button onClick={() => navigate("route1")}>
                    Go to Route 1
                </button>
            </div>

            <div>
                <button onClick={() => navigate("remote")}>
                    Go to Remote Route
                </button>
            </div>

            <Outlet />
        </div>
    );
}

export default Layout;