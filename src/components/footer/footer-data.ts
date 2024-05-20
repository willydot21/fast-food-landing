
const linksTemplate = (sections: string[]) => sections.map(el => ({ text: el, href: '#', link: true }));
const platformsIcons = ["pinterest", "instagram", "twitter", "facebook"];
const menuSections = linksTemplate(["Home", "Offers", "Service", "About Us"]);
const platforms = platformsIcons.map(el => ({ icon: el, link: true }));

const references = linksTemplate([
  "Menu",
  "Quality",
  "Make a Choice",
  "Salad With Vegetable",
  "Fast Delivery",
  "Susbscribe",
]);

const contactMethods = [
  "+123 456 789",
  "Explore",
  "info@foodish.com",
  "1245, New York, USA",
];

const twColRefs = "flex flex-col gap-4";

const footerRefs = [
  {
    title: "Contact",
    twStyles: twColRefs,
    elements: contactMethods,
  },
  {
    title: "Menu",
    twStyles: twColRefs,
    elements: menuSections,
  },
  {
    title: "Information",
    twStyles: twColRefs,
    elements: references,
  },
];

export {
  menuSections,
  platforms,
  references,
  contactMethods,
  footerRefs
}