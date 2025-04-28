import React from 'react';
import Register from '../../pages/RegisterPage';
import Activate from '../../pages/ActivatePage';
import Login from '../../pages/LoginPage';
import ForgotPassword from '../../pages/ForgotPassword';
// import HomePage from '../../pages/HomePage';
import Dashboard from '../../pages/DasboardPage';
import ProductManagement from '../../pages/ProductManagement';
import CategoryManagement from '../../pages/CategoryManagement';
import UserManagement from '../../pages/UserManagement';
import ProductDetailPage from '../../pages/DetailProduct';
import NotFound from '../_shared/Notfound';
// import LatihanMobile from '../../pages/LatihanMobile';
import SkripsiOnline from '../../pages/stikyHeadingPertemuan5';
import ContactForm from '../../pages/ContactUsPertemuan5';
import Mahasiswa from '../../pages/LatihanAPImahasiswa';
import Produk from '../../pages/LatihanAPIProducts';

export interface Route {
    path: string;
    component: React.FC;
}

const routes: Route[] = [
    {
        path: '/',
        component: Produk,
    },
    {
        path: '/pertemuan5-stikymenu',
        component: SkripsiOnline,
    },
    {
        path: '/pertemuan5-animasicontact',
        component: ContactForm,
    },
    {
        path: '/latihan-api',
        component: Mahasiswa,
    },
    {
        path: '/latihan-api-product',
        component: Produk,
    },
    {
        path: '/product-detail/:id',
        component: ProductDetailPage,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/activate',
        component: Activate,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/product',
        component: ProductManagement,
    },
    {
        path: '/category',
        component: CategoryManagement,
    },
    {
        path: '/users-management',
        component: UserManagement,
    },

    {
        path: '*',
        component: NotFound,
    },
];

export default routes;
