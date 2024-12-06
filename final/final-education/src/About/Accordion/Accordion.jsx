import { useState } from "react";
import './accordion.css';
import Button from "../../Button/Button";

function Accordion({ data }) {

    const [openNum, setOpenNum] = useState(null);
    const handleSet = (index) => {
        setOpenNum(openNum === index ? null : index);
    };

    function AccordionItem({ id, question, answer, isOpen, controlExpand }) {

        return (
            <div className="accordion-item">
                <Button
                    className="accordion-name"
                    a11yExpanded={isOpen}
                    a11yControl={`accordion-content-${id}`}
                    onClick={controlExpand}
                    a11yLabel="toggle accordion item"
                >
                    {question}
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" >
                        <path d="M444-768v438L243-531l-51 51 288 288 288-288-51-51-201 201v-438h-72Z" />
                    </svg>
                </Button>

                <div
                    id={`accordion-content-${id}`}
                    className={`accordion-content ${isOpen ? "open" : ""}`}
                >
                    <p>{answer}</p>
                </div>

            </div>
        );
    }

    return (
        <div className="accordion-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            {data.map((faq, index) => (
                <AccordionItem
                    key={faq.id}
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openNum === index}
                    controlExpand={() => handleSet(index)}
                >
                </AccordionItem>
            ))}
        </div>
    );
}
export default Accordion;