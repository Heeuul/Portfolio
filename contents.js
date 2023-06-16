import Intro from "./sections/Intro";
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import Exp from "./sections/Exp";
import Edu from "./sections/Edu";
import Personal from "./sections/Personal";

export const contents = [
  {
    id: 0,
    component: <Intro />,
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
    component: <Exp />,
  },
  {
    id: 4,
    component: <Edu />,
  },
  {
    id: 5,
    component: <Personal />,
  },
];
