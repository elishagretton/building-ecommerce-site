import Header from "./header";
import Sidebar from "./sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-row relative">
        <Sidebar className="sticky top-0 w-1/4 flex flex-column align-center justify-center bg-blue-200" />
        <div className="w-3/4 bg-gradient-to-r from-gray-200 to-white-500">{children}</div>
      </div>
    </>
  );
};

export default Layout;
