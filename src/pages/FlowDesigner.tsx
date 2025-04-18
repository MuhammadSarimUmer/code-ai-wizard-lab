import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FileDown, ArrowRightLeft, Image, RefreshCcw } from "lucide-react";
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

    // Simulate flowchart generation
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
      toast({
        title: "Flowchart Generated",
        description: "Your flowchart has been successfully created.",
      });
    }, 2000);
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
                className="font-mono h-80 resize-none bg-code text-code-foreground"
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
                  <div className="border border-muted-foreground/20 rounded-lg p-4 bg-white">
                    {/* This would be a real flowchart in the actual implementation */}
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
                  <div className="flex justify-center mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      <Image className="mr-2 h-4 w-4" />
                      Save as PNG
                    </Button>
                    <Button variant="outline" size="sm">
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
                <Button variant="outline" className="h-auto p-3 justify-start">
                  <div className="text-left">
                    <h3 className="font-medium">Sorting Algorithm</h3>
                    <p className="text-xs text-muted-foreground">Bubble Sort flowchart example</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-3 justify-start">
                  <div className="text-left">
                    <h3 className="font-medium">Binary Search</h3>
                    <p className="text-xs text-muted-foreground">Binary search implementation</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-3 justify-start">
                  <div className="text-left">
                    <h3 className="font-medium">Login Process</h3>
                    <p className="text-xs text-muted-foreground">User authentication flow</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-3 justify-start">
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
