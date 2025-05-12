import { DiJava, DiPostgresql } from "react-icons/di";
import { FaDocker, FaGitAlt, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiNginx } from "react-icons/si";
import { SiGo, SiTypescript } from "react-icons/si";

export const skills = [
  {
    name: 'Golang',
    icon: <SiGo />,
    color: 'text-teal-400',
    level: 90
  },
  {
    name: 'React',
    icon: <FaReact />,
    color: 'text-cyan-400',
    level: 92
  },
  {
    name: 'Python',
    icon: <FaPython />,
    color: 'text-cyan-400',
    level: 60
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    color: 'text-yellow-400',
    level: 80
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-400',
    level: 75
  },

  {
    name: 'Node.js',
    icon: <FaNodeJs />,
    color: 'text-green-400',
    level: 45
  },

  {
    name: 'Docker',
    icon: <FaDocker />,
    color: 'text-blue-400',
    level: 55
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    color: 'text-orange-400',
    level: 75
  },
  {
    name: 'Nginx',
    icon: <SiNginx />,
    color: 'text-orange-400',
    level: 30
  },
  {
    name: 'Java',
    icon: <DiJava />,
    color: 'text-orange-400',
    level: 20
  },
  {
    name: 'Flutter',
    icon: <FaFlutter />,
    color: 'text-orange-400',
    level: 60
  },
  {
    name: 'PostgreSQL',
    icon: <DiPostgresql />,
    color: 'text-orange-400',
    level: 90
  },

];