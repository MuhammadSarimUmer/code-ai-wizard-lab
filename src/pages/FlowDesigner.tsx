
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FileDown, ArrowRightLeft, Image, RefreshCcw, Code2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const FlowDesigner = () => {
  const [code, setCode] = useState(`function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}`);
  const [flowType, setFlowType] = useState("flowchart");
  const [isGenerating, setIsGenerating] = useState(false);
  const [layoutType, setLayoutType] = useState("vertical");
  const [generated, setGenerated] = useState(false);
  const [flowchart, setFlowchart] = useState<string | null>(null);

  const generateFlowchart = () => {
    if (!code.trim()) {
      toast({
        title: "No code provided",
        description: "Please enter some code to generate a flowchart.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setGenerated(false);

    // AI processing logic for generating flowcharts
    setTimeout(() => {
      // This would be replaced with actual AI-generated flowchart content
      const generatedFlowChart = generateFlowChartFromCode(code, flowType, layoutType);
      setFlowchart(generatedFlowChart);
      setIsGenerating(false);
      setGenerated(true);
      toast({
        title: "Flowchart Generated",
        description: "Your flowchart has been successfully created.",
      });
    }, 2000);
  };

  // Mock function to generate a flowchart based on code
  const generateFlowChartFromCode = (code: string, type: string, layout: string) => {
    // This would be replaced with actual AI processing
    // For now, we'll return a structured representation
    if (code.includes("factorial")) {
      return "factorial-flowchart";
    } else if (code.includes("for") || code.includes("while")) {
      return "loop-flowchart";
    } else {
      return "generic-flowchart";
    }
  };

  const downloadFlowchart = (format: string) => {
    toast({
      title: `Flowchart Downloaded as ${format}`,
      description: `Your flowchart has been saved to your downloads folder.`,
    });
  };

  const renderFlowchart = () => {
    if (flowchart === "factorial-flowchart") {
      return (
        <div className="border border-muted-foreground/20 rounded-lg p-4 bg-white">
          <div className="mx-auto w-fit p-4">
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Start
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Function: factorial(n)
            </div>
            <div className="border-2 border-primary bg-muted/20 transform rotate-45 mb-4 mx-auto w-fit p-6">
              <div className="transform -rotate-45">
                n == 0 || n == 1?
              </div>
            </div>
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="border-l-2 border-primary h-6 mx-auto"></div>
                <div className="mb-1">Yes</div>
                <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4">
                  return 1
                </div>
              </div>
              <div className="text-center">
                <div className="border-l-2 border-primary h-6 mx-auto"></div>
                <div className="mb-1">No</div>
                <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4">
                  return n * factorial(n-1)
                </div>
              </div>
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mt-4 mx-auto w-fit">
              End
            </div>
          </div>
        </div>
      );
    } else if (flowchart === "loop-flowchart") {
      return (
        <div className="border border-muted-foreground/20 rounded-lg p-4 bg-white">
          <div className="mx-auto w-fit p-4">
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Start
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Initialize variables
            </div>
            <div className="border-2 border-primary bg-muted/20 transform rotate-45 mb-4 mx-auto w-fit p-6">
              <div className="transform -rotate-45">
                Loop Condition
              </div>
            </div>
            <div className="flex justify-center gap-16">
              <div className="text-center">
                <div className="border-l-2 border-primary h-6 mx-auto"></div>
                <div className="mb-1">True</div>
                <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4">
                  Loop Body
                </div>
                <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4">
                  Update Variables
                </div>
                <div className="border-l-2 border-primary h-6 mx-auto"></div>
                <div className="border-b-2 border-primary w-32 mx-auto"></div>
                <div className="border-r-2 border-primary h-40 absolute -mt-40 ml-32"></div>
                <div className="border-t-2 border-primary w-32 absolute -mt-40 ml-32"></div>
              </div>
              <div className="text-center">
                <div className="border-l-2 border-primary h-6 mx-auto"></div>
                <div className="mb-1">False</div>
                <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4">
                  Exit Loop
                </div>
              </div>
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mt-8 mx-auto w-fit">
              End
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="border border-muted-foreground/20 rounded-lg p-4 bg-white">
          <div className="mx-auto w-fit p-4">
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Start
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Process Input
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Perform Computation
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mb-4 mx-auto w-fit">
              Return Result
            </div>
            <div className="border-2 border-primary rounded-lg px-4 py-2 mt-4 mx-auto w-fit">
              End
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Flow Designer</h1>
        <p className="text-muted-foreground">Visualize code logic with flowcharts and diagrams</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Code Input</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your code here..."
                className="font-mono h-80 resize-none bg-muted/30 text-foreground"
              />
            </CardContent>
          </Card>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="flowchart-type" className="mb-2 block">Flowchart Type</Label>
              <Select value={flowType} onValueChange={setFlowType}>
                <SelectTrigger id="flowchart-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flowchart">Basic Flowchart</SelectItem>
                  <SelectItem value="sequence">Sequence Diagram</SelectItem>
                  <SelectItem value="class">Class Diagram</SelectItem>
                  <SelectItem value="state">State Diagram</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Label htmlFor="layout-direction" className="mb-2 block">Layout Direction</Label>
              <Select value={layoutType} onValueChange={setLayoutType}>
                <SelectTrigger id="layout-direction">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vertical">Top to Bottom</SelectItem>
                  <SelectItem value="horizontal">Left to Right</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button 
              className="flex-1" 
              onClick={generateFlowchart}
              disabled={isGenerating || !code.trim()}
            >
              {isGenerating ? (
                <>
                  <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <ArrowRightLeft className="mr-2 h-4 w-4" />
                  Generate Flowchart
                </>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              className="flex-1"
              disabled={!generated}
              onClick={() => {
                toast({
                  title: "Flowchart Downloaded",
                  description: "Your flowchart has been saved to your downloads folder.",
                });
              }}
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Flowchart Preview</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[400px] flex items-center justify-center bg-muted/30">
              {isGenerating ? (
                <div className="text-center">
                  <RefreshCcw className="h-12 w-12 animate-spin mx-auto mb-4 text-muted-foreground" />
                  <p>Generating your flowchart...</p>
                </div>
              ) : generated ? (
                <div className="text-center w-full">
                  {renderFlowchart()}
                  <div className="flex justify-center mt-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => downloadFlowchart('PNG')}>
                      <Image className="mr-2 h-4 w-4" />
                      Save as PNG
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => downloadFlowchart('SVG')}>
                      <FileDown className="mr-2 h-4 w-4" />
                      Save as SVG
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <ArrowRightLeft className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p>Enter your code and click generate to create a flowchart</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Tabs defaultValue="flowchart">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="flowchart">Flowchart</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="help">Help</TabsTrigger>
            </TabsList>
            <TabsContent value="flowchart" className="p-4">
              <h3 className="font-medium mb-2">What is a Flowchart?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Flowcharts are visual representations of algorithms, workflows, or processes that show the steps as boxes of various kinds and connect them with arrows to illustrate the flow.
              </p>
              <h3 className="font-medium mb-2">Benefits:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Visualizes complex algorithms</li>
                <li>Helps identify logic errors</li>
                <li>Makes code more understandable</li>
                <li>Useful for documentation</li>
              </ul>
            </TabsContent>
            <TabsContent value="examples" className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-3 justify-start" onClick={() => {
                  setCode(`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`);
                }}>
                  <div className="text-left">
                    <h3 className="font-medium">Sorting Algorithm</h3>
                    <p className="text-xs text-muted-foreground">Bubble Sort flowchart example</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-3 justify-start" onClick={() => {
                  setCode(`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`);
                }}>
                  <div className="text-left">
                    <h3 className="font-medium">Binary Search</h3>
                    <p className="text-xs text-muted-foreground">Binary search implementation</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-3 justify-start" onClick={() => {
                  setCode(`function login(username, password) {
  if (!username || !password) {
    return { success: false, message: 'Missing credentials' };
  }
  
  // Check credentials against database
  const isValid = checkCredentials(username, password);
  
  if (isValid) {
    createSession(username);
    return { success: true, message: 'Login successful' };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
}`);
                }}>
                  <div className="text-left">
                    <h3 className="font-medium">Login Process</h3>
                    <p className="text-xs text-muted-foreground">User authentication flow</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-3 justify-start" onClick={() => {
                  setCode(`function processFile(filePath) {
  // Check if file exists
  if (!fileExists(filePath)) {
    return { error: 'File not found' };
  }
  
  // Read file contents
  const data = readFile(filePath);
  
  // Process the data
  const processedData = transformData(data);
  
  // Write processed data back to file
  writeFile(filePath + '.processed', processedData);
  
  return { success: true, outputFile: filePath + '.processed' };
}`);
                }}>
                  <div className="text-left">
                    <h3 className="font-medium">File Processing</h3>
                    <p className="text-xs text-muted-foreground">Reading and writing to files</p>
                  </div>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="help" className="p-4">
              <h3 className="font-medium mb-2">How to Use:</h3>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
                <li>Paste or write your code in the input area</li>
                <li>Select the type of diagram you want to generate</li>
                <li>Choose the layout direction (vertical or horizontal)</li>
                <li>Click "Generate Flowchart" to create your diagram</li>
                <li>Download or export the result as needed</li>
              </ol>
              <p className="mt-3 text-sm">
                <strong>Tip:</strong> For best results, ensure your code is properly formatted and syntactically correct.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FlowDesigner;
