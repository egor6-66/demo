import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import IncidentsPage from '@/pages/workspace/incidents';
import ReportsPage from '@/pages/workspace/reports';

import AuthPage from './auth';
import WorkspacePage from './workspace';

const Pages = () => {
    const location = useLocation();

    const routesTree = {
        auth: { path: '/auth/*', element: <AuthPage /> },
        workspace: {
            path: '/workspace/*',
            element: <WorkspacePage />,
            childrens: {
                incidents: { path: 'incidents/*', element: <IncidentsPage /> },
                reports: { path: 'reports/*', element: <ReportsPage /> },
            },
        },
    };

    return (
        <AnimatePresence mode={'wait'}>
            <Routes location={location} key={location.pathname.split('/')[1]}>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
                <Route path={'*'} element={<Navigate to={'/workspace'} />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
