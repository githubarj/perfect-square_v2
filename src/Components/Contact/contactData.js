const contactPageHeader = {
  h1: " Contact Us",
  p: "At Perfect Square our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change.",
  display: "none",
};

const componentHeaders = [
  {
    id: 1,
    categoryTag: "FAQs",
    h1: "Answers to some of your questions",
    p: `Don’t find the answers you were looking for? Contact us at `,
    span: "perfectsquare@gmail.com",
  },
];

const contactInfo = [
  {
    id: 1,
    icon: "/images/whatsapp.png",
    h2: "WhatsApp",
    text: "+254 722 540649",
    link: "https://api.whatsapp.com/send?phone=254722540649&text=Hello",
  },
  {
    id: 2,
    icon: "/images/briefcase.png",
    h2: "Sales and Businesses",
    text: "info@perfectsquare.cc",
    link: `"mailto:info@perfectsquare.cc"`,
  },
  {
    id: 3,
    icon: "/images/customer-support.png",
    h2: "Customer Support",
    text: "+254 705 561607",
    link: "tel:+254705561607",
  },
];

export { contactPageHeader, contactInfo, componentHeaders };
