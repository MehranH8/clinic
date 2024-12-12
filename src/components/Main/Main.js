import Doctors from "../Doctors/Doctors";
import NavbarSimple from "../Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import Support from "../Support/Support";
import About from "../About/About";
import Services from "../Services/Services";
import Home from "../Home/Home";
import Footer from "../Footer/Footer"


const Main = () => {
    return (
        <div>
            <NavbarSimple />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/support" element={<Support />} />
                <Route path="/aboutus" element={<About />} />
                <Route path="/services" element={<Services />} />
            </Routes>
            <Footer/>
        </div>
    )
}


export default Main