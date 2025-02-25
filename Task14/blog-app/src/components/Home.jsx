import Aboutcontent from "./About/Aboutcontent";
// import Aboutpage from "./Aboutpage";
import Contactform from "./Contact/ContactForm";
// import Contactpage from "./Contactpage";
import Homemain from "./Home/Homemain";

const Homepage = ()=>{
    return (
        <>
            <Homemain/>
             <Aboutcontent/>
            <Contactform/>
        </>
    )
};

export default Homepage;