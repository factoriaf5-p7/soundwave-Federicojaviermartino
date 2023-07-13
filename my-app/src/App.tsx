import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Join } from "./views/join";
import {Discover} from "./views/Discover";
import {HomePage} from "./views/HomePage";
import {Navbar} from "./components/navbar";
import {Footer} from "./components/Footer";




export function App() {
    return (
        <>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Discover" element={<Discover />} />
                    <Route path="/join" element={<Join />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}