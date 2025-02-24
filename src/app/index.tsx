import React from 'react';
import { createRoot } from 'react-dom/client';

import Pages from '@/pages';
import { AuthProvider, QueryProvider, RouterProvider } from '@/proveders';

import './index.scss';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    <QueryProvider>
        <RouterProvider>
            <AuthProvider>
                <Pages />
            </AuthProvider>
        </RouterProvider>
    </QueryProvider>
);
