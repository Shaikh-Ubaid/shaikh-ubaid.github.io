import HeadMeta from "./HeadMeta";
import Navbar from "./Navbar";


function Layout({ children }) {
    return (
        <div>
            <HeadMeta />
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
