
import Footer from '../footer/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
            <Footer />
        </div>
    )  
}

export default Layout;