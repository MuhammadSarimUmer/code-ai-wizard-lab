
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { BookOpen, Code, HelpCircle, Mail, MessageSquare, PlayCircle, Search } from "lucide-react";

const Help = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Find answers to your questions</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input className="pl-10 h-12" placeholder="Search for help or documentation..." />
      </div>

      <Tabs defaultValue="faq">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">FAQs</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6 mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>How do I get started with Code Wizard?</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p>
                  Getting started with Code Wizard is easy! Here's how:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Start by exploring the learning paths for your preferred programming language.</li>
                  <li>Complete the introductory modules to understand the basics.</li>
                  <li>Practice with the interactive coding exercises.</li>
                  <li>Use the AI mentor whenever you get stuck or need guidance.</li>
                  <li>Track your progress on the skill map and set goals for improvement.</li>
                </ol>
                <Button variant="outline" className="mt-2" asChild>
                  <a href="/learning-paths">Explore Learning Paths</a>
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger>How does the AI Mentor feature work?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">
                  The AI Mentor is a powerful assistant that can help you with your coding journey:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ask questions about programming concepts</li>
                  <li>Get help debugging your code</li>
                  <li>Upload code files for analysis and explanation</li>
                  <li>Extract code from images using AI vision capabilities</li>
                  <li>Receive personalized guidance on your learning path</li>
                </ul>
                <p className="mt-3">
                  Simply navigate to the AI Mentor page and start a conversation. You can type your questions or upload files directly.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger>How are my skills tracked and measured?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Your progress is tracked across various dimensions:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2 mb-3">
                  <li>Module completion for each language learning path</li>
                  <li>Coding challenges successfully completed</li>
                  <li>Project implementations</li>
                  <li>Quiz and interview preparation scores</li>
                </ul>
                <p>
                  The Skill Map visualizes your strengths and areas for improvement across different programming languages and concepts. This helps you understand where to focus your learning efforts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger>How can I convert code between different languages?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Code Wizard offers a code conversion feature in the Code Editor:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mt-2">
                  <li>Write or paste your code in the editor</li>
                  <li>Select your current language from the dropdown menu</li>
                  <li>Use the language selector to choose the target language</li>
                  <li>The code will be automatically converted</li>
                </ol>
                <p className="mt-3">
                  The conversion works between Python, JavaScript, C#, C++, and C. While the conversion attempts to maintain functionality, you may need to make minor adjustments depending on language-specific features.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-5">
              <AccordionTrigger>How do I generate a flowchart from my code?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Visualizing your code as a flowchart is simple:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mt-2">
                  <li>Go to the Flow Designer page</li>
                  <li>Enter or paste your code in the input area</li>
                  <li>Select the flowchart type and layout direction</li>
                  <li>Click "Generate Flowchart"</li>
                  <li>Download the generated flowchart in your preferred format</li>
                </ol>
                <p className="mt-3">
                  This feature helps visualize the logic flow of your algorithms, making it easier to understand and debug complex code.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  Getting Started
                </CardTitle>
                <CardDescription>Learn the basics of Code Wizard</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Platform Overview</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Setting Up Your Profile</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Navigating Learning Paths</a>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">View All</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  AI Mentor Tutorials
                </CardTitle>
                <CardDescription>Master the AI assistant capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Asking Effective Questions</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Code Analysis with AI</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Uploading Files for Help</a>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">View All</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Code Editor Mastery
                </CardTitle>
                <CardDescription>Tips and tricks for the code editor</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Keyboard Shortcuts</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Code Formatting</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <a href="#" className="text-sm hover:underline">Time Complexity Analysis</a>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">View All</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documentation" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Comprehensive guides and references</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Platform Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Button variant="outline" className="justify-start h-auto py-2">
                          <div className="text-left">
                            <h4 className="font-medium">AI Mentor</h4>
                            <p className="text-xs text-muted-foreground">AI-powered coding assistant</p>
                          </div>
                        </Button>
                        <Button variant="outline" className="justify-start h-auto py-2">
                          <div className="text-left">
                            <h4 className="font-medium">Learning Paths</h4>
                            <p className="text-xs text-muted-foreground">Structured programming courses</p>
                          </div>
                        </Button>
                        <Button variant="outline" className="justify-start h-auto py-2">
                          <div className="text-left">
                            <h4 className="font-medium">Skill Map</h4>
                            <p className="text-xs text-muted-foreground">Progress tracking system</p>
                          </div>
                        </Button>
                        <Button variant="outline" className="justify-start h-auto py-2">
                          <div className="text-left">
                            <h4 className="font-medium">Code Editor</h4>
                            <p className="text-xs text-muted-foreground">Interactive code playground</p>
                          </div>
                        </Button>
                        <Button variant="outline" className="justify-start h-auto py-2">
                          <div className="text-left">
                            <h4 className="font-medium">Project Generator</h4>
                            <p className="text-xs text-muted-foreground">AI project creation tool</p>
                          </div>
                        </Button>
                        <Button variant="outline" className="justify-start h-auto py-2">
                          <div className="text-left">
                            <h4 className="font-medium">Flow Designer</h4>
                            <p className="text-xs text-muted-foreground">Code visualization tool</p>
                          </div>
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <Button variant="outline" className="justify-start">Python</Button>
                        <Button variant="outline" className="justify-start">JavaScript</Button>
                        <Button variant="outline" className="justify-start">C#</Button>
                        <Button variant="outline" className="justify-start">C++</Button>
                        <Button variant="outline" className="justify-start">C</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">API Documentation</h3>
                      <p className="text-sm text-muted-foreground">
                        Access our API documentation to integrate Code Wizard features into your own applications.
                      </p>
                      <Button className="mt-3">View API Docs</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm hover:underline">
                        <HelpCircle className="h-4 w-4" />
                        Getting Started Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm hover:underline">
                        <BookOpen className="h-4 w-4" />
                        Learning Path Structure
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm hover:underline">
                        <MessageSquare className="h-4 w-4" />
                        AI Mentor Usage
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm hover:underline">
                        <Code className="h-4 w-4" />
                        Code Editor Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-2 text-sm hover:underline">
                        <PlayCircle className="h-4 w-4" />
                        Video Tutorials
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-3 py-1">
                      <h4 className="font-medium">Flow Designer Launch</h4>
                      <p className="text-xs text-muted-foreground">April 10, 2025</p>
                    </div>
                    <div className="border-l-2 border-muted pl-3 py-1">
                      <h4 className="font-medium">AI Mentor Improvements</h4>
                      <p className="text-xs text-muted-foreground">March 28, 2025</p>
                    </div>
                    <div className="border-l-2 border-muted pl-3 py-1">
                      <h4 className="font-medium">New C# Learning Path</h4>
                      <p className="text-xs text-muted-foreground">March 15, 2025</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">View All Updates</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-sm">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-sm">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium text-sm">Subject</label>
                    <Input id="subject" placeholder="What's your issue about?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-medium text-sm">Message</label>
                    <textarea 
                      id="message" 
                      className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                      placeholder="Describe your issue in detail..."
                    ></textarea>
                  </div>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Submit Request
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Alternative Ways to Get Help</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">AI Mentor</h4>
                          <p className="text-sm text-muted-foreground">Get instant help with the AI Mentor for coding and platform-related questions.</p>
                          <Button variant="link" className="p-0 h-auto mt-1">Ask AI Mentor</Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Help Center</h4>
                          <p className="text-sm text-muted-foreground">Browse our extensive documentation and tutorials for step-by-step guidance.</p>
                          <Button variant="link" className="p-0 h-auto mt-1">Visit Help Center</Button>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Email Support</h4>
                          <p className="text-sm text-muted-foreground">Send us an email directly for more complex issues.</p>
                          <Button variant="link" className="p-0 h-auto mt-1">support@codewizard.com</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg mt-6">
                    <h4 className="font-medium mb-2">Support Hours</h4>
                    <p className="text-sm text-muted-foreground">Monday to Friday: 9 AM - 5 PM EST</p>
                    <p className="text-sm text-muted-foreground">Weekend: Limited Support</p>
                    <p className="text-sm mt-3">Average response time: <span className="font-medium">24 hours</span></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Help;
