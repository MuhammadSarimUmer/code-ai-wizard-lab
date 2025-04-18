import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Brain, Award, Code2, FileJson, FilePieChart, FileTerminal, Puzzle, Terminal, FileCode2 } from "lucide-react";

// Mock data
const skillCategories = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Python", progress: 65, icon: FileTerminal, color: "bg-blue-500" },
      { name: "JavaScript", progress: 48, icon: FileJson, color: "bg-yellow-500" },
      { name: "C#", progress: 32, icon: FilePieChart, color: "bg-purple-500" },
      { name: "C++", progress: 20, icon: FileCode2, color: "bg-red-500" },
      { name: "C", progress: 15, icon: Terminal, color: "bg-gray-500" }
    ]
  },
  {
    id: "algorithms",
    name: "Algorithms & Data Structures",
    skills: [
      { name: "Arrays", progress: 80, icon: Code2, color: "bg-green-500" },
      { name: "Linked Lists", progress: 60, icon: Code2, color: "bg-green-500" },
      { name: "Trees", progress: 40, icon: Code2, color: "bg-green-500" },
      { name: "Sorting", progress: 70, icon: Code2, color: "bg-green-500" },
      { name: "Dynamic Programming", progress: 20, icon: Code2, color: "bg-green-500" }
    ]
  },
  {
    id: "concepts",
    name: "Programming Concepts",
    skills: [
      { name: "Object-Oriented Programming", progress: 75, icon: Puzzle, color: "bg-pink-500" },
      { name: "Functional Programming", progress: 50, icon: Puzzle, color: "bg-pink-500" },
      { name: "Concurrency", progress: 35, icon: Puzzle, color: "bg-pink-500" },
      { name: "Design Patterns", progress: 40, icon: Puzzle, color: "bg-pink-500" },
      { name: "Testing", progress: 60, icon: Puzzle, color: "bg-pink-500" }
    ]
  }
];

// Mock achievements
const achievements = [
  { name: "Python Basics Mastery", description: "Completed all basic Python modules", icon: Award },
  { name: "Algorithm Expert", description: "Solved 20 algorithm challenges", icon: Brain },
  { name: "Code Streak", description: "Practiced for 7 consecutive days", icon: Code2 }
];

const SkillMap = () => {
  const [selectedCategory, setSelectedCategory] = useState("languages");
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Skill Map</h1>
        <p className="text-muted-foreground">Track your progress and identify areas for growth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-3">
              {skillCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className={`h-1 ${skill.color}`} style={{ width: `${skill.progress}%` }}></div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center`}>
                            <skill.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">{skill.name}</h3>
                              <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                            </div>
                            <Progress value={skill.progress} className="h-2" />
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <Button variant="ghost" size="sm" className="text-xs">Details</Button>
                          <Button size="sm" className="text-xs">Practice</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skill Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Overall Progress</span>
                    <span>48%</span>
                  </div>
                  <Progress value={48} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Strongest Skill</span>
                    <span>Python</span>
                  </div>
                  <Progress value={65} className="h-2 bg-muted" indicatorClassName="bg-blue-500" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Latest Improvement</span>
                    <span>JavaScript</span>
                  </div>
                  <Progress value={48} className="h-2 bg-muted" indicatorClassName="bg-yellow-500" />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Recommended Focus Areas:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>C++ Fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>C# Object-Oriented Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>Algorithm Optimization</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <achievement.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{achievement.name}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-2">View All Achievements</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillMap;
