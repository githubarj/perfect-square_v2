import ComponentHeader from "../Utility/Modules/ComponentHeader";
import ViewAll from "../Utility/Modules/ViewAll";
import { componentHeaders } from "./contactData";
import "./contact.css";
import QuestionAnswer from "./QuestionAnswer";
import { faqs } from "../../Data/FrequentlyAsked";
import { useState } from "react";

function FAQs() {
  const header = componentHeaders[0];
  const [view, setView] = useState(false);

  function handleClick() {
    setView((prev) => !prev);
  }

  const qas = faqs.map((item, index) => {
    return <QuestionAnswer key={index} {...item} />;
  });

  const faqsSection = view ? qas : qas.slice(0, 4);

  return (
    <div className="faqs-container">
      <ComponentHeader
        category={header.categoryTag}
        h1={header.h1}
        p={header.p}
        span={header.span}
      />
      <div className="faqs-questions-section">{faqsSection}</div>
      <ViewAll
        rotate={view ? "rotate-270" : "rotate-90"}
        view={view ? "View Less" : "View All"}
        func={handleClick}
      />
    </div>
  );
}

export default FAQs;
