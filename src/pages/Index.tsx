
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, Code2, FileSpreadsheet, FlowArrow, GraduationCap, Heart, Lightbulb } from "lucide-react";

import FeatureCard from "@/components/home/FeatureCard";
import ProgressSection from "@/components/home/ProgressSection";
import RecentActivity from "@/components/home/RecentActivity";
import LanguageCards from "@/components/home/LanguageCards";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome to Code Wizard</h1>
        <p className="text-muted-foreground">Your interactive journey to programming mastery</p>
      </div>

      {/* Featured Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          title="AI Mentor"
          description="Chat with your AI programming assistant for instant help"
          icon={<BrainCircuit className="h-6 w-6" />}
          to="/ai-mentor"
          color="bg-blue-500/10 text-blue-500"
        />
        <FeatureCard 
          title="Learn Coding"
          description="Structured learning paths for 5 popular programming languages"
          icon={<Code2 className="h-6 w-6" />}
          to="/learning-paths"
          color="bg-purple-500/10 text-purple-500"
        />
        <FeatureCard 
          title="Build Projects"
          description="Apply your skills with guided projects and challenges"
          icon={<FileSpreadsheet className="h-6 w-6" />}
          to="/projects"
          color="bg-green-500/10 text-green-500"
        />
        <FeatureCard 
          title="Track Progress"
          description="Visualize your learning journey with skill maps"
          icon={<GraduationCap className="h-6 w-6" />}
          to="/skill-map"
          color="bg-orange-500/10 text-orange-500"
        />
      </div>

      <div>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-[400px] mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="continue">Continue Learning</TabsTrigger>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Your Learning Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <h3 className="font-medium">Learning Languages</h3>
                      <LanguageCards />
                      
                      <div className="flex justify-between items-center mt-6">
                        <h3 className="font-medium">Quick Actions</h3>
                        <Button variant="ghost" size="sm">View All</Button>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Button variant="outline" className="justify-start">
                          <BrainCircuit className="mr-2 h-4 w-4" />
                          Ask AI Mentor
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Code2 className="mr-2 h-4 w-4" />
                          Practice Coding
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <FlowArrow className="mr-2 h-4 w-4" />
                          Generate Flowchart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <ProgressSection />
                <RecentActivity />
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/20 text-primary p-2 rounded-full">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">Did you know?</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Our AI mentor can analyze your code and suggest improvements for better performance and readability.
                Try uploading your code in the AI Mentor section!
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="continue">
            <Card>
              <CardHeader>
                <CardTitle>Continue Your Learning Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your last session was on Python: List Comprehensions</p>
                <Button className="mt-4">Continue Learning</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="suggested">
            <Card>
              <CardHeader>
                <CardTitle>Suggested for You</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Based on your interests, we recommend these learning paths:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Advanced JavaScript: Promises & Async/Await</li>
                  <li>Python: Object-Oriented Programming</li>
                  <li>Data Structures Fundamentals</li>
                </ul>
                <Button className="mt-4">Explore Recommendations</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
