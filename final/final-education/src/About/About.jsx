import './about.css';
import Accordion from "./Accordion/Accordion";

import dataFAQ from "../data/dataFAQ";
import Review from './Review/Review';
function About() {

    return (
        <>
            <Review></Review>
            <Accordion data={dataFAQ}></Accordion>


        </>
    );
}
export default About;