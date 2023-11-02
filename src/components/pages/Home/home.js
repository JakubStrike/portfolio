import Navbar from "./NavBar/navbar";
import Intro from './Intro/intro';
import Skills from "./Skills/skills";
import Works from "./Works/works";
import Contact from "./Contact/contact";
import Footer from "../../Footer/footer";
const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;