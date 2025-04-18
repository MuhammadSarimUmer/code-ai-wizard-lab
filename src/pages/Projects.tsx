import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, Download, FileJson, FileTerminal, FilePieChart, FileCode2, Terminal, Clock, Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const projectTemplates = [
  {
    id: "todo-app",
    name: "To-Do List Application",
    description: "Build a task management application with CRUD operations.",
    difficulty: "Beginner",
    estimatedTime: "2-3 hours",
    languageOptions: ["python", "javascript", "csharp", "cpp", "c"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "calculator",
    name: "Calculator App",
    description: "Create a calculator with basic arithmetic operations.",
    difficulty: "Beginner",
    estimatedTime: "1-2 hours",
    languageOptions: ["python", "javascript", "csharp", "cpp", "c"],
    category: "Desktop Application",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "weather-app",
    name: "Weather Forecast App",
    description: "Build an application that fetches and displays weather data using an API.",
    difficulty: "Intermediate",
    estimatedTime: "3-4 hours",
    languageOptions: ["python", "javascript"],
    category: "API Integration",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "blog-platform",
    name: "Blog Platform",
    description: "Create a simple blog platform with posts and comments.",
    difficulty: "Intermediate",
    estimatedTime: "5-6 hours",
    languageOptions: ["python", "javascript", "csharp"],
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "game-snake",
    name: "Snake Game",
    description: "Implement the classic Snake game with graphics.",
    difficulty: "Intermediate",
    estimatedTime: "4-5 hours",
    languageOptions: ["python", "javascript", "cpp", "c"],
    category: "Game Development",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "file-explorer",
    name: "File Explorer",
    description: "Build a simple file explorer to navigate directories and files.",
    difficulty: "Advanced",
    estimatedTime: "6-8 hours",
    languageOptions: ["python", "csharp", "cpp", "c"],
    category: "System Programming",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=400&auto=format&fit=crop"
  },
];

const languageIcons = {
  python: FileTerminal,
  javascript: FileJson,
  csharp: FilePieChart,
  cpp: FileCode2,
  c: Terminal
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("templates");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLanguage, setProjectLanguage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPdf, setGeneratedPdf] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectTemplates.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "beginner") return matchesSearch && project.difficulty === "Beginner";
    if (selectedFilter === "intermediate") return matchesSearch && project.difficulty === "Intermediate";
    if (selectedFilter === "advanced") return matchesSearch && project.difficulty === "Advanced";
    if (selectedFilter === "web") return matchesSearch && project.category === "Web Application";
    
    return matchesSearch;
  });

  const handleGenerate = () => {
    if (!projectName.trim() || !projectDescription.trim() || !projectLanguage) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields before generating a project.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPdf(`${projectName.replace(/\s+/g, '-').toLowerCase()}-project-plan.pdf`);
      toast({
        title: "Project Generated!",
        description: "Your custom project has been created and is ready for download.",
      });
    }, 2500);
  };

  const handleViewPdf = () => {
    toast({
      title: "Viewing PDF",
      description: `Opening ${generatedPdf} in a new tab.`,
    });
  };

  const handleDownloadPdf = () => {
    toast({
      title: "Project Downloaded",
      description: `${generatedPdf} has been saved to your downloads folder.`,
    });
  };

  const handleDownload = (projectId: string) => {
    toast({
      title: "Project Downloaded",
      description: "Project files have been saved to your downloads folder.",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">Apply your skills with practical projects</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="templates">Project Templates</TabsTrigger>
          <TabsTrigger value="generate">AI Project Generator</TabsTrigger>
        </TabsList>
        <TabsContent value="templates" className="mt-6">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="w-full md:w-64">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <Input 
                    id="search" 
                    placeholder="Find projects..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="All Languages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Languages</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="csharp">C#</SelectItem>
                      <SelectItem value="cpp">C++</SelectItem>
                      <SelectItem value="c">C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select 
                    value={selectedFilter}
                    onValueChange={setSelectedFilter}
                  >
                    <SelectTrigger id="difficulty">
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="category">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="web">Web Application</SelectItem>
                      <SelectItem value="desktop">Desktop Application</SelectItem>
                      <SelectItem value="api">API Integration</SelectItem>
                      <SelectItem value="game">Game Development</SelectItem>
                      <SelectItem value="system">System Programming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <Card key={project.id} className="overflow-hidden flex flex-col">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 flex flex-col p-6">
                      <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 flex-grow">{project.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-normal">{project.difficulty}</Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{project.estimatedTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.languageOptions.slice(0, 3).map(lang => {
                            const Icon = languageIcons[lang as keyof typeof languageIcons];
                            return (
                              <Badge key={lang} variant="secondary" className="text-xs font-normal">
                                <Icon className="h-3 w-3 mr-1" />
                                {lang.charAt(0).toUpperCase() + lang.slice(1)}
                              </Badge>
                            );
                          })}
                          {project.languageOptions.length > 3 && (
                            <Badge variant="secondary" className="text-xs font-normal">
                              +{project.languageOptions.length - 3} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button size="sm" onClick={() => handleDownload(project.id)}>
                            <Download className="h-4 w-4 mr-2" />
                            Start
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="generate" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Generate Custom Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input 
                      id="project-name" 
                      placeholder="E.g., Expense Tracker App" 
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project-description">Project Description</Label>
                    <Textarea 
                      id="project-description" 
                      placeholder="Describe what you want your project to do..."
                      className="resize-none h-32"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project-language">Programming Language</Label>
                    <Select value={projectLanguage} onValueChange={setProjectLanguage}>
                      <SelectTrigger id="project-language">
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="csharp">C#</SelectItem>
                        <SelectItem value="cpp">C++</SelectItem>
                        <SelectItem value="c">C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {!generatedPdf ? (
                    <Button 
                      className="w-full"
                      disabled={isGenerating}
                      onClick={handleGenerate}
                    >
                      {isGenerating ? (
                        <>
                          <BrainCircuit className="mr-2 h-4 w-4 animate-spin" />
                          Generating Project...
                        </>
                      ) : (
                        <>
                          <BrainCircuit className="mr-2 h-4 w-4" />
                          Generate Project
                        </>
                      )}
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center p-3 border rounded-md bg-muted/20">
                        <FileText className="h-8 w-8 text-primary mr-3" />
                        <div className="flex-grow">
                          <p className="font-medium">{generatedPdf}</p>
                          <p className="text-xs text-muted-foreground">Generated project plan</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1" onClick={handleViewPdf}>
                          View PDF
                        </Button>
                        <Button className="flex-1" onClick={handleDownloadPdf}>
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          setProjectName("");
                          setProjectDescription("");
                          setProjectLanguage("");
                          setGeneratedPdf(null);
                        }}
                      >
                        Create Another Project
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-medium mb-3">How it works:</h3>
                  <ol className="list-decimal text-sm space-y-2 ml-5 text-muted-foreground">
                    <li>Enter the name and description of your project</li>
                    <li>Select your preferred programming language</li>
                    <li>Our AI will generate a complete project structure, including:</li>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      <li>Project specification document</li>
                      <li>Code templates</li>
                      <li>Development roadmap</li>
                      <li>Required resources</li>
                    </ul>
                    <li>Download the PDF file and get started!</li>
                  </ol>
                  
                  <div className="mt-6 p-3 bg-primary/5 rounded-md border border-primary/20 flex items-start gap-3">
                    <BrainCircuit className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">AI Project Assistant</h4>
                      <p className="text-xs text-muted-foreground">
                        Need help during development? Use our AI mentor to guide you through implementing your project, answer questions, and troubleshoot issues.
                      </p>
                    </div>
                  </div>

                  {generatedPdf && (
                    <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-3 rounded-md border border-green-200 dark:border-green-800">
                      <h4 className="font-medium text-sm text-green-800 dark:text-green-300 flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Project Generated Successfully!
                      </h4>
                      <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                        Your project plan has been generated and is ready for download. The PDF contains all the details you need to start building.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;
