import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="ml-[72px] lg:ml-72 flex flex-wrap h-full bg-[#FCFCFC] p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
