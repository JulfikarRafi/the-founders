import React from 'react';
import { Outlet } from 'react-router';

const MyLayouts = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MyLayouts;