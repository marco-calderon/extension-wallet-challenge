import React from 'react';
import { Appbar } from '../../components/appbar';
import { Outlet } from 'react-router-dom';

/**
 * Main Page for the application.
 * 
 * It should render the routes with the appbar at the top.
 * 
 * @returns the rendered component
 */
function MainPage() {
    return (
        <>
            <Appbar />
            <Outlet />
        </>
    );
}

export default MainPage;