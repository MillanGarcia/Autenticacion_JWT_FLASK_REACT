import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
        {sessionStorage.length === 0 ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Cerrar sesión</button>
        )}
      </div>
    </nav>
  );
};
