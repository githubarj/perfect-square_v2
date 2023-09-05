import Card from "../Utility/Card/Card";
import { values,aboutHeader } from "./aboutData";
import "./about.css";
import ComponentHeader from "../Utility/Modules/ComponentHeader";


function Values() {  
  const info = aboutHeader[0]

  const valuesSection = values.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="values-container">
      <ComponentHeader 
      category={info.categoryTag}
      h1 = {info.h1}
      p = {info.p}
       />
      <div className="values-main">{valuesSection}</div>
    </div>
  );
}

export default Values;
