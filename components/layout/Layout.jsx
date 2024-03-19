import Footer from "./footer";
import MainNavigation from "./main-navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
