import {experienceListAttributes} from "../../components/experience/experienceListAttributes.js";

const rightSection = document.getElementById("right-section");
const experiencesList = [
    {
        company: "Altus Assessments",
        location: "Toronto, Canada",
        position:"Senior Software Engineer",
        duration:"March 2021 - march 2023 (2 years)",
        highlights:"Co-op program coordinator; Scrum master; Automation & Integration tests advocate/mentor;"
    },
    {
        company: "Derivco",
        location: "Tallin, Estonia",
        position: "Senior Software Engineer",
        duration: "February 2020 - july 2021 (1 year 6 months)",
        highlights: `Tech Lead; Took a game from paper to
        millions of users across Europe; Collaborated with
        teams in multiple offices and timezones;`
    },
    {
        company: "Cia. da Consulta",
        location: "Sao Paulo, Brazil",
        position: "Lead Full Stack Engineer",
        duration: "July 2019 - february 2020 (8 months)",
        highlights: `Tech Lead; Participated in strategy &
        product planning; mentorship to junior team
        members`
    },
    {
        company: "Thinkseg",
        location: "Sao Paulo, Brazil",
        position: "Frontend and Mobile Software Engineer",
        duration: "September 2017 - june 2019 (1 year 10 months)",
        highlights: `Responsible for mobile app and
        Frontend; Migrated a complex Ionic app to
        Flutter; Close collaboration with design, product &
        backend teams`
    },
    {
        company: "Netbiis",
        location: "Sao Paulo, Brazil",
        position: "Fullstack Software Enginee",
        duration: "February 2017 - september 2017 (8 months)",
    },
    {
        company: "Duke, smart professionals",
        location: "Sao Paulo, Brazil",
        position: "Co-founder",
        duration: "February 2016 - january 2017 (1 year)",
    },
    {
        company: "Upworks",
        location: "Remote (US)",
        position: "Freelancer Web Developer",
        duration: "January 2015 - january 2017 (2 years)",
    },
    {
        company: "H. Cidade ltda",
        location: "Alphaville, Brazil",
        position: "Engineer Intern",
        duration: "November 2014 - november 2015 (1 year)",
    }
];

for(let experience of experiencesList) {
    const experienceContainer = document.createElement("experience-container");

    for(let attribute of experienceListAttributes) {
        experienceContainer.setAttribute(attribute, experience[attribute]);
    }

    rightSection.appendChild(experienceContainer);
}

console.log("bolo hari hari mukunda murari, rama krsna hayagriva");