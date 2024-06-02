import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <React.Fragment>
            <div className="k_left-sidebar">
                {/* Sidebar Logo */}
                <div className="k_left-sidebar-header">
                    <Link to="/" className="k_flex">
                        <img src='assets/logo/logo.png' alt="logo" />
                    </Link>

                </div>

                {/* Sidebar All Link */}
                <ul className="k_left-sidebar-menubar k_left-sidebar-menubar-height">
                    <li className="k_menu">
                        <NavLink className="k_flex" to="/layouts"><i class="ri-bar-chart-fill"></i>Charts</NavLink>
                    </li>
                    <li className="k_menu">
                        <NavLink className="k_flex" to="/tables"><i className="ri-table-line"></i>Tables</NavLink>
                    </li>
                    <li className="k_menu">
                        <NavLink className="k_flex" to="/reports"><i className="ri-todo-fill"></i>Reports</NavLink>
                    </li>
                </ul>
                <ul className="k_left-sidebar-menubar">
                    <li className="k_menu">
                        <NavLink className="k_flex" to="/profile"><i class="ri-user-line"></i>Abhishek Lohia</NavLink>
                    </li>
                    <li className="k_menu">
                        <NavLink className="k_flex" to="/"> <i className="ri-shut-down-line"></i>Logout</NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Sidebar