import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '../components/PageLoader';
import PageNotFound from '../components/PageNotFound';
import Appshell from '../layout/appshell/Appshell';

const Home = React.lazy(() => import("../pages/Home/Home"));

export const RoutesComponent: React.FC = () => {
    return (
        <>
            <React.Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Appshell />}>
                        <Route path="home" element={<Home />} />
                    </Route>

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </React.Suspense>
        </>
    ) 
}
