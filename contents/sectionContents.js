import Introduction from "../sections/IntroductionSection";
import Project from "../sections/ProjectSection";
import Skill from "../sections/SkillSection";
import Experience from "../sections/ExperienceSection";
import Education from "../sections/EducationSection";
import Personal from "../sections/PersonalSection";

export const sections = [
  {
    id: 0,
    component: <Introduction />,
  },
  {
    id: 1,
    component: <Project />,
  },
  {
    id: 2,
    component: <Skill />,
  },
  {
    id: 3,
    component: <Experience />,
  },
  {
    id: 4,
    component: <Education />,
  },
  {
    id: 5,
    component: <Personal />,
  },
];
