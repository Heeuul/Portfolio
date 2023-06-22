import Project from "../sections/ProjectSection";
import Skill from "../sections/SkillSection";
import Experience from "../sections/ExperienceSection";
import Education from "../sections/EducationSection";
import Detail from "../sections/DetailSection";

export const sections = [
  { id: 0, title: "Projects", component: <Project /> },
  { id: 1, title: "Skills", component: <Skill /> },
  { id: 2, title: "Experiences", component: <Experience /> },
  { id: 3, title: "Educations", component: <Education /> },
  { id: 4, title: "Details", component: <Detail /> },
];
