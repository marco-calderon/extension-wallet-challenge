import React from 'react';
import { Appbar } from '../../components/appbar';
import DashboardContainer from '../../containers/dashboard-container';

/**
 * Main Page for the application.
 * 
 * @returns the rendered component
 */
function MainPage() {
    return (
        <>
            <Appbar />
            <DashboardContainer />
        </>
    );
}

export default MainPage;