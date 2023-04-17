import skillsGenerator from "./skillsGenerator.js";

const skillsContainer = "skills-list";
const skillsList = ["Leadership", "Javascript/Typescript/NodeJS", "React", "Angular", "HTML/CSS", "Mobile Development","AWS", "REST API", "GraphQL", "SQL", "NoSQL", "TDD", "Integration Tests", "Agile"];

skillsGenerator(skillsContainer, skillsList);

const languagesContainer = "languages-list";
const languagesList = ["English", "Português", "Español", "Hindi", "Bangla", "Bisschen Deutsch"];

skillsGenerator(languagesContainer, languagesList);