import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Wrapper } from '@/shared/ui';
import Footer from '@/widgets/footer';
import Header from '@/widgets/header';

import IncidentsPage from './incidents';
import ReportsPage from './reports';

import * as styles from './styles.module.scss';

const WorkspacePage = () => {
    const location = useLocation();

    const routes = [
        { path: 'incidents/*', element: <IncidentsPage /> },
        { path: 'reports/*', element: <ReportsPage /> },
    ];

    return (
        <Wrapper animationKey={'workspacePage'} className={styles.wrapper}>
            <Header />
            <div className={styles.main}>
                {/*<AnimatePresence mode={'wait'}>*/}
                wdawd
                {/*<Routes location={location} key={location.pathname.split('/')[1]}>*/}
                {/*    {routes.map(({ path, element }) => (*/}
                {/*        <Route key={path} path={path} element={element} />*/}
                {/*    ))}*/}
                {/*</Routes>*/}
                {/*</AnimatePresence>*/}
            </div>
            <Footer />
        </Wrapper>
    );
};

export default WorkspacePage;
