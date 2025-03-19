import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )  
}

export default Layout;