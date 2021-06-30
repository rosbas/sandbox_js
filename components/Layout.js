import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
// import { Content, Bg } from "./Template";

export default function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {/* <Navbar2/> */}
            {children}
            <Footer/>
        </div>
    )
}