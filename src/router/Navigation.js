import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes
} from "react-router-dom";

import Users from "../pages/admin/users/users";
import CreateUser from "../pages/admin/users/createUser";
import Home from "../pages/admin/home";
import ListFund from "../pages/admin/fund/listFund";

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<Home />} />
                <Route path="/admin/fund" element={<ListFund />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/users/create" element={<CreateUser />} />
            </Routes>
        </Router>
    )
}

export default Navigation;