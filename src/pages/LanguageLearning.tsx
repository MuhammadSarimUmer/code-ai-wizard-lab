
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileTerminal, FileJson, FilePieChart, FileCode, Terminal, CheckCircle2, Play, MessageCircle, Award, Lock, Trophy, ExternalLink } from "lucide-react";

// Mock data
const languagesData = {
  python: {
    name: "Python",
    icon: FileTerminal,
    color: "bg-blue-500",
    progress: 65,
    description: "Python is known for its readability and simplicity, making it an excellent choice for beginners. It's widely used in data science, web development, automation, and more.",
    modules: [
      {
        id: "basics",
        title: "Python Basics",
        completed: true,
        progress: 100,
        lessons: [
          { id: "intro", title: "Introduction to Python", completed: true },
          { id: "variables", title: "Variables and Data Types", completed: true },
          { id: "operators", title: "Operators and Expressions", completed: true }
        ]
      },
      {
        id: "control-flow",
        title: "Control Flow",
        completed: true,
        progress: 100,
        lessons: [
          { id: "conditionals", title: "Conditional Statements", completed: true },
          { id: "loops", title: "Loops", completed: true },
          { id: "functions", title: "Functions", completed: true }
        ]
      },
      {
        id: "data-structures",
        title: "Data Structures",
        completed: false,
        progress: 67,
        lessons: [
          { id: "lists", title: "Lists and Tuples", completed: true },
          { id: "dicts", title: "Dictionaries", completed: true },
          { id: "sets", title: "Sets", completed: false }
        ]
      },
      {
        id: "oop",
        title: "Object-Oriented Programming",
        completed: false,
        progress: 0,
        locked: true,
        lessons: [
          { id: "classes", title: "Classes and Objects", completed: false },
          { id: "inheritance", title: "Inheritance", completed: false },
          { id: "polymorphism", title: "Polymorphism", completed: false }
        ]
      }
    ],
    projects: [
      {
        id: "todo-app",
        title: "To-Do List Application",
        difficulty: "Beginner",
        completed: false,
        description: "Build a simple console-based to-do list app to manage tasks."
      },
      {
        id: "weather-app",
        title: "Weather Forecast App",
        difficulty: "Intermediate",
        completed: false,
        description: "Create an application that fetches and displays weather data using an API."
      }
    ],
    resources: [
      {
        title: "Python Crash Course",
        type: "video",
        url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
        source: "freeCodeCamp"
      },
      {
        title: "Python Documentation",
        type: "documentation",
        url: "https://docs.python.org/3/",
        source: "Python.org"
      }
    ]
  },
  javascript: {
    name: "JavaScript",
    icon: FileJson,
    color: "bg-yellow-500",
    progress: 48,
    description: "JavaScript is the programming language of the web. It's essential for front-end web development and increasingly used for back-end development with Node.js.",
    modules: [
      {
        id: "basics",
        title: "JavaScript Basics",
        completed: true,
        progress: 100,
        lessons: [
          { id: "intro", title: "Introduction to JavaScript", completed: true },
          { id: "variables", title: "Variables and Data Types", completed: true },
          { id: "operators", title: "Operators and Expressions", completed: true }
        ]
      },
      {
        id: "functions",
        title: "Functions",
        completed: false,
        progress: 67,
        lessons: [
          { id: "basics", title: "Function Basics", completed: true },
          { id: "arrow", title: "Arrow Functions", completed: true },
          { id: "callbacks", title: "Callbacks and Higher-Order Functions", completed: false }
        ]
      }
    ],
    projects: [],
    resources: []
  },
  csharp: {
    name: "C#",
    icon: FilePieChart,
    color: "bg-purple-500",
    progress: 32,
    description: "C# is a modern, object-oriented programming language developed by Microsoft. It's widely used for Windows applications, game development with Unity, and enterprise software.",
    modules: [],
    projects: [],
    resources: []
  },
  cpp: {
    name: "C++",
    icon: FileCode,
    color: "bg-red-500",
    progress: 20,
    description: "C++ is a powerful language that extends C with object-oriented features. It's used for system/software development, game development, and applications requiring high performance.",
    modules: [],
    projects: [],
    resources: []
  },
  c: {
    name: "C",
    icon: Terminal,
    color: "bg-gray-500",
    progress: 15,
    description: "C is one of the oldest and most influential programming languages. It provides low-level access to memory and is used for operating systems, embedded systems, and performance-critical applications.",
    modules: [],
    projects: [],
    resources: []
  }
};

const LanguageLearning = () => {
  const { language = "python" } = useParams<{ language: string }>();
  const [selectedTab, setSelectedTab] = useState("modules");
  
  const languageData = languagesData[language as keyof typeof languagesData] || languagesData.python;
  const { name, icon: Icon, color, progress, description, modules, projects, resources } = languageData;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-lg ${color} flex items-center justify-center text-white`}>
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-muted-foreground">Learning Path</p>
          </div>
        </div>
        
        <Button>
          <MessageCircle className="mr-2 h-4 w-4" />
          Ask AI Mentor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <h2 className="font-medium">Your Progress</h2>
              <span className="text-sm">{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
            <TabsList className="grid grid-cols-4 md:w-[400px]">
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modules" className="space-y-6">
              {modules.map((module) => (
                <Card key={module.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {module.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : module.locked ? (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <div className={`h-5 w-5 rounded-full border-2 ${color} flex items-center justify-center`}>
                            <div className="h-2 w-2 rounded-full bg-foreground"></div>
                          </div>
                        )}
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        {module.completed && (
                          <Badge variant="outline" className="ml-2">Completed</Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {module.progress}% Complete
                      </div>
                    </div>
                    
                    {module.locked ? (
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <Lock className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                        <p className="font-medium">Complete previous modules to unlock</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3 mb-4">
                          {module.lessons.map((lesson) => (
                            <Link
                              key={lesson.id}
                              to={`/learning-paths/${language}/module/${module.id}/lesson/${lesson.id}`}
                              className={`flex items-center justify-between p-3 rounded-md border ${lesson.completed ? 'bg-muted/30' : 'hover:bg-muted/20'}`}
                            >
                              <div className="flex items-center gap-3">
                                {lesson.completed ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                  <div className="h-4 w-4 rounded-full border-2 border-primary" />
                                )}
                                <span>{lesson.title}</span>
                              </div>
                              <Play className="h-4 w-4 opacity-50" />
                            </Link>
                          ))}
                        </div>
                        <div className="flex justify-between">
                          <Button variant="outline">Module Details</Button>
                          <Button>
                            {module.completed ? "Review Module" : "Continue Module"}
                          </Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="projects" className="space-y-6">
              {projects && projects.length > 0 ? (
                projects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <Badge variant="outline" className="mt-1">{project.difficulty}</Badge>
                          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                        </div>
                        <Button>Start Project</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <Trophy className="h-16 w-16 mx-auto text-muted-foreground opacity-20 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Projects Available Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Complete more modules to unlock projects for this language.
                  </p>
                  <Button>Return to Modules</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="challenges" className="text-center py-12">
              <Trophy className="h-16 w-16 mx-auto text-muted-foreground opacity-20 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Challenges Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're preparing coding challenges for this language. Check back soon!
              </p>
              <Button>Return to Modules</Button>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              {resources && resources.length > 0 ? (
                resources.map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">Source: {resource.source}</p>
                        </div>
                        <Button variant="outline" asChild>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Open Resource
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <ExternalLink className="h-16 w-16 mx-auto text-muted-foreground opacity-20 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Resources Coming Soon</h3>
                  <p className="text-muted-foreground">
                    We're curating the best learning resources for this language.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-2">About {name}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Modules:</span>
                  <span className="font-medium">{modules.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Completed:</span>
                  <span className="font-medium">{modules.filter(m => m.completed).length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next Milestone:</span>
                  <span className="font-medium">Module 3</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">View Your Skill Map</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">Need Help?</h2>
              <Button className="w-full mb-2">
                <MessageCircle className="mr-2 h-4 w-4" />
                Ask AI Mentor
              </Button>
              <Button variant="outline" className="w-full">
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LanguageLearning;
