import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import 'styles/globals.css';

import { userService } from 'services';
import { Nav, Alert } from 'components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Post from "../pages/Post";
import Reels from "../pages/Reels";

export default App;

function App({ Component, pageProps }) {
    const RequireAuth = ({ children }) => {
        const { user } = useContext(AuthContext);
        return user ? children : <Navigate to="/login" replace />;
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/explore"
                        element={
                            <RequireAuth>
                                <Explore />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/reels"
                        element={
                            <RequireAuth>
                                <Reels />
                            </RequireAuth>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/p/:id" element={<Post />} />
                    <Route path="/:username" element={<Profile />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
}
