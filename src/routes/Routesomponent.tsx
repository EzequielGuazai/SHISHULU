import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '../components/PageLoader';
import PageNotFound from '../components/PageNotFound';
import Appshell from '../layout/appshell/Appshell';

const Home = React.lazy(() => import("../pages/Home/Home"));
const Sobre = React.lazy(() => import("../pages/Sobre/Sobre"));
const Inscricao = React.lazy(() => import("../pages/Inscricao/Inscricao"));
const Contacto = React.lazy(() => import("../pages/Contacto/Contacto"));

export const RoutesComponent: React.FC = () => {
    return (
        <React.Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<Appshell />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="inscricao" element={<Inscricao />} />
                    <Route path="contacto" element={<Contacto />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </React.Suspense>
    );
};