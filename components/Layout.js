import Footer from "./Footer";
import Navbar from "./Navbar";
import { Content, Bg } from "./Template";

export default function Layout({children}) {
    return (
        <Bg>
            <Navbar/>
            <Content>
            {children}
            </Content>
            <Footer/>
        </Bg>
    )
}