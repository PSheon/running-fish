// ** Component Imports
import SectionTitle from "@/common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "@/common/accordion/Accordion";

// ** Icon Imports
import { FiPlus, FiMinus } from "react-icons/fi";

// ** Constant Imports
import { data1, data2 } from "@/assets/data/faqDataV2";

// ** Style Imports
import FAQStyleWrapper from "./Faq.style";

const FAQ = () => {
  return (
    <FAQStyleWrapper className="faq_section" id="faq">
      <div className="container">
        <SectionTitle
          title="QUESTION & ANSWER"
          subtitle="Faq"
          className="section_title"
        />

        <div className="row faq_row">
          <div className="col-md-6">
            <div className="faq_content">
              <div className="faq_questions_wrapper">
                <Accordion className="faq_questions">
                  {data1?.map((item, i) => (
                    <AccordionItem key={i}>
                      <AccordionTitle>
                        <h5>{item.title}</h5>
                        <IconWrapper>
                          <OpenIcon>
                            <FiMinus />
                          </OpenIcon>
                          <CloseIcon>
                            <FiPlus />
                          </CloseIcon>
                        </IconWrapper>
                      </AccordionTitle>
                      <AccordionBody>
                        <p>{item.text}</p>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="faq_content">
              <div className="faq_questions_wrapper">
                <Accordion className="faq_questions">
                  {data2?.map((item, i) => (
                    <AccordionItem key={i}>
                      <AccordionTitle onClick={() => console.log(i)}>
                        <h5>{item.title}</h5>
                        <IconWrapper>
                          <OpenIcon>
                            <FiMinus />
                          </OpenIcon>
                          <CloseIcon>
                            <FiPlus />
                          </CloseIcon>
                        </IconWrapper>
                      </AccordionTitle>
                      <AccordionBody>
                        <p>{item.text}</p>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default FAQ;
