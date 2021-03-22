import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return(
        <div className='MainBody'>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
};

export default Layout;


