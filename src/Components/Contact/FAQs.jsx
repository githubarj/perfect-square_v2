import ComponentHeader from "../Utility/Modules/ComponentHeader";
import ViewAll from "../Utility/Modules/ViewAll";
import { componentHeaders } from "./contactData";
import "./contact.css";
import QuestionAnswer from "./QuestionAnswer";

function FAQs() {
  const header = componentHeaders[0];
  return (
    <div className="faqs-container">
      <ComponentHeader
        category={header.categoryTag}
        h1={header.h1}
        p={header.p}
        span={header.span}
      />
      <div className="faqs-questions-section">
        <QuestionAnswer />
        <QuestionAnswer />
        <QuestionAnswer />
        <QuestionAnswer />
      </div>
      <ViewAll rotate="rotated-image" />
    </div>
  );
}

export default FAQs;
