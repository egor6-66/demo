import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import IncidentsPage from './workspace/incidents';
import ReportsPage from './workspace/reports';
import AuthPage from './auth';
import WorkspacePage from './workspace';

const Pages = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode={'wait'}>
            <Routes location={location} key={location.pathname.split('/')[1]}>
                <Route path={'/auth/*'} element={<AuthPage />} />
                <Route path={'/workspace/*'} element={<WorkspacePage />}>
                    <Route path={'incidents/*'} element={<IncidentsPage />} />
                    <Route path={'reports/*'} element={<ReportsPage />} />
                </Route>
                <Route path={'*'} element={<Navigate to={'/workspace'} />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
