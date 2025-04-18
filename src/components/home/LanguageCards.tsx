
import { Link } from "react-router-dom";
import { Code, FileCode, FileJson, FilePieChart, FileTerminal } from "lucide-react";

const languages = [
  {
    name: "Python",
    icon: FileTerminal,
    color: "bg-blue-500/80",
    path: "/learning-paths/python",
    progress: 65
  },
  {
    name: "JavaScript",
    icon: FileJson,
    color: "bg-yellow-500/80",
    path: "/learning-paths/javascript",
    progress: 48
  },
  {
    name: "C#",
    icon: FilePieChart,
    color: "bg-purple-500/80",
    path: "/learning-paths/csharp",
    progress: 32
  },
  {
    name: "C++",
    icon: FileCode,
    color: "bg-red-500/80",
    path: "/learning-paths/cpp",
    progress: 20
  },
  {
    name: "C",
    icon: Code,
    color: "bg-gray-500/80",
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
          className="bg-white shadow-md rounded-xl overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
        >
          <div className={`${language.color} h-2`} style={{ width: `${language.progress}%` }}></div>
          <div className="p-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <language.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium">{language.name}</h3>
            <p className="text-xs text-muted-foreground mt-1">{language.progress}% complete</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LanguageCards;
