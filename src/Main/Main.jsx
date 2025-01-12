import React from 'react';
import Heder from '../Share/Heder/Heder';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Heder></Heder>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;