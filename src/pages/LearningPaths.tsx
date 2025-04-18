
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, FileCode, FileJson, FilePieChart, FileTerminal, MoreHorizontal, Search, Terminal } from "lucide-react";

const languagePaths = [
  {
    id: "python",
    name: "Python",
    description: "A versatile language perfect for beginners, data science, web development, and more.",
    color: "bg-blue-500/80",
    icon: FileTerminal,
    modules: 24,
    projects: 8,
    challenges: 15,
    level: "Beginner to Advanced",
    progress: 65,
    popularTopics: ["Data Science", "Web Development", "Automation", "Machine Learning"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "The language of the web, essential for frontend development and increasingly popular for backend.",
    color: "bg-yellow-500/80",
    icon: FileJson,
    modules: 28,
    projects: 10,
    challenges: 18,
    level: "Beginner to Advanced",
    progress: 48,
    popularTopics: ["DOM Manipulation", "Async Programming", "React", "Node.js"],
  },
  {
    id: "csharp",
    name: "C#",
    description: "A powerful language for Windows apps, game development, and enterprise software.",
    color: "bg-purple-500/80",
    icon: FilePieChart,
    modules: 20,
    projects: 6,
    challenges: 12,
    level: "Beginner to Advanced",
    progress: 32,
    popularTopics: [".NET Development", "Unity Game Dev", "WPF", "ASP.NET"],
  },
  {
    id: "cpp",
    name: "C++",
    description: "A high-performance language used in systems programming, game engines, and competitive programming.",
    color: "bg-red-500/80",
    icon: FileCode,
    modules: 22,
    projects: 7,
    challenges: 14,
    level: "Intermediate to Advanced",
    progress: 20,
    popularTopics: ["Object-Oriented Programming", "Memory Management", "Game Development", "Data Structures"],
  },
  {
    id: "c",
    name: "C",
    description: "The foundation of modern programming languages, ideal for low-level systems programming.",
    color: "bg-gray-500/80",
    icon: Terminal,
    modules: 18,
    projects: 5,
    challenges: 10,
    level: "Intermediate to Advanced",
    progress: 15,
    popularTopics: ["Memory Management", "Operating Systems", "Embedded Systems", "Algorithm Implementation"],
  },
];

const LearningPaths = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredPaths = languagePaths.filter((path) => {
    return path.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Learning Paths</h1>
          <p className="text-muted-foreground">Master programming languages with guided paths</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search paths..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <Brain className="mr-2 h-4 w-4" />
            Recommend Path
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All Languages</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="beginner">For Beginners</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value={filter} className="mt-6">
          <div className="grid gap-6">
            {filteredPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className={`${path.color} w-full md:w-2 h-2 md:h-auto`}></div>
                  <div className="p-6 flex flex-col md:flex-row gap-6 flex-grow">
                    <div className="flex items-start gap-4 flex-grow">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <path.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2 flex-grow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-xl font-semibold">{path.name}</h2>
                            <p className="text-sm text-muted-foreground">{path.level}</p>
                          </div>
                          {path.progress > 0 && (
                            <Badge variant="outline" className="ml-auto mr-6">
                              {path.progress}% Complete
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm">{path.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {path.popularTopics.map((topic) => (
                            <Badge key={topic} variant="secondary">{topic}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:border-l md:pl-6 flex flex-col">
                      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                        <div>
                          <p className="text-2xl font-semibold">{path.modules}</p>
                          <p className="text-xs text-muted-foreground">Modules</p>
                        </div>
                        <div>
                          <p className="text-2xl font-semibold">{path.projects}</p>
                          <p className="text-xs text-muted-foreground">Projects</p>
                        </div>
                        <div>
                          <p className="text-2xl font-semibold">{path.challenges}</p>
                          <p className="text-xs text-muted-foreground">Challenges</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <Button asChild className="flex-1">
                          <Link to={`/learning-paths/${path.id}`}>
                            {path.progress > 0 ? "Continue" : "Start Learning"}
                          </Link>
                        </Button>
                        <Button variant="outline" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-muted/50 rounded-lg p-6">
        <h3 className="text-lg font-medium mb-2">Need guidance?</h3>
        <p className="text-muted-foreground mb-4">
          Not sure which language to start with? Our AI mentor can recommend the best learning path based on your goals and experience.
        </p>
        <Button variant="outline" asChild>
          <Link to="/ai-mentor">
            <Brain className="mr-2 h-4 w-4" />
            Get Personalized Recommendation
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LearningPaths;
