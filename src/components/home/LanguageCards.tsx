
import { Link } from "react-router-dom";
import { FileTerminal, FileJson, FilePieChart, FileCode2, Terminal } from "lucide-react";

const languages = [
  {
    name: "Python",
    icon: FileTerminal,
    color: "bg-blue-500",
    path: "/learning-paths/python",
    progress: 65
  },
  {
    name: "JavaScript",
    icon: FileJson,
    color: "bg-yellow-500",
    path: "/learning-paths/javascript",
    progress: 48
  },
  {
    name: "C#",
    icon: FilePieChart,
    color: "bg-purple-500",
    path: "/learning-paths/csharp",
    progress: 32
  },
  {
    name: "C++",
    icon: FileCode2,
    color: "bg-red-500",
    path: "/learning-paths/cpp",
    progress: 20
  },
  {
    name: "C",
    icon: Terminal,
    color: "bg-gray-500",
    path: "/learning-paths/c",
    progress: 15
  }
];

const LanguageCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {languages.map(language => (
        <Link
          key={language.name}
          to={language.path}
          className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <div className={`${language.color} h-2`} style={{ width: `100%` }}></div>
          <div className="p-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <language.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-base mb-1">{language.name}</h3>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full ${language.color}`} 
                style={{ width: `${language.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{language.progress}% complete</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LanguageCards;
