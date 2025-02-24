import React from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper } from '@/shared/ui';
import Footer from '@/widgets/footer';
import Header from '@/widgets/header';

import * as styles from './styles.module.scss';

const WorkspacePage = () => {
    return (
        <Wrapper animationKey={'workspacePage'} className={styles.wrapper}>
            <Header />
            <div className={styles.main}>
                <Outlet />
            </div>
            <Footer />
        </Wrapper>
    );
};

export default WorkspacePage;
