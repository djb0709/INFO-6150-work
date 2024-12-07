import './about.css';
import Accordion from "./Accordion/Accordion";

import dataFAQ from "../data/dataFAQ";
function About() {

    return (
        <>
            <Accordion data={dataFAQ}></Accordion>
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
            <p>aaa</p>
        </>
    );
}
export default About;