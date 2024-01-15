import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="ml-[72px] lg:ml-72 p-2 h-[100vh]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
