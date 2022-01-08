import React from 'react';
import { Appbar } from '../../components/appbar';
import DashboardContainer from '../../containers/dashboard-container';

function MainPage() {
    return (
        <>
            <Appbar />
            <DashboardContainer />
        </>
    );
}

export default MainPage;