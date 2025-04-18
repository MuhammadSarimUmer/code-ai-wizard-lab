
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Code2, 
  Copy, 
  FlowArrow, 
  Play, 
  RefreshCcw, 
  Save, 
  Share, 
  Timer, 
  Trash,
  Wand2
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const CodeEditor = () => {
  const [code, setCode] = useState(`function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
`);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [timeComplexity, setTimeComplexity] = useState("");
  const [isCalculatingComplexity, setIsCalculatingComplexity] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput("");
    
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      
      switch (language) {
        case "javascript":
          setOutput("120");
          break;
        case "python":
          setOutput("120");
          break;
        default:
          setOutput("120");
      }
    }, 1000);
  };

  const calculateComplexity = () => {
    setIsCalculatingComplexity(true);
    setTimeComplexity("");
    
    // Simulate time complexity calculation
    setTimeout(() => {
      setIsCalculatingComplexity(false);
      setTimeComplexity("Time Complexity: O(n)\nSpace Complexity: O(n)\n\nThe recursive factorial function has a time complexity of O(n) because it makes n recursive calls. The space complexity is also O(n) due to the call stack.");
    }, 1500);
  };

  const generateFlowchart = () => {
    setIsGenerating(true);
    
    // Simulate flowchart generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Flowchart Generated",
        description: "Your flowchart has been generated and opened in a new tab.",
      });
      // In a real implementation, this would generate a flowchart and open it
    }, 2000);
  };

  const switchLanguage = (newLanguage: string) => {
    // Simulate code conversion
    let convertedCode = "";
    switch (newLanguage) {
      case "javascript":
        convertedCode = `function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));`;
        break;
      case "python":
        convertedCode = `def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`;
        break;
      case "csharp":
        convertedCode = `using System;

class Program {
    static int Factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * Factorial(n - 1);
    }

    static void Main() {
        Console.WriteLine(Factorial(5));
    }
}`;
        break;
      case "cpp":
        convertedCode = `#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    cout << factorial(5) << endl;
    return 0;
}`;
        break;
      case "c":
        convertedCode = `#include <stdio.h>

int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    printf("%d\\n", factorial(5));
    return 0;
}`;
        break;
    }

    setLanguage(newLanguage);
    setCode(convertedCode);
    toast({
      title: "Code Converted",
      description: `Your code has been converted to ${newLanguage.charAt(0).toUpperCase() + newLanguage.slice(1)}.`,
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Code Editor</h1>
          <p className="text-muted-foreground">Write, run, and analyze code</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button size="sm">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-grow">
        {/* Code Editor Section */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2 items-center">
              <Label htmlFor="language">Language:</Label>
              <Select value={language} onValueChange={switchLanguage}>
                <SelectTrigger id="language" className="w-32">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy Code</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => setCode("")}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Clear Code</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => toast({
                      title: "Code Formatted",
                      description: "Your code has been formatted according to best practices.",
                    })}>
                      <Wand2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Format Code</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="code-editor flex-grow overflow-auto relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="font-mono w-full h-full p-4 bg-code text-code-foreground resize-none outline-none"
                spellCheck="false"
              />
            </div>

            <div className="flex items-center justify-between mt-2 gap-2">
              <Button
                onClick={runCode}
                disabled={isRunning || !code.trim()}
                className="flex-grow"
              >
                {isRunning ? (
                  <>
                    <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Run Code
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={calculateComplexity}
                disabled={isCalculatingComplexity || !code.trim()}
                className="flex-grow"
              >
                {isCalculatingComplexity ? (
                  <>
                    <Timer className="mr-2 h-4 w-4 animate-spin" />
                    Calculating...
                  </>
                ) : (
                  <>
                    <Clock className="mr-2 h-4 w-4" />
                    Calculate Complexity
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={generateFlowchart}
                disabled={isGenerating || !code.trim()}
                className="flex-grow"
              >
                {isGenerating ? (
                  <>
                    <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FlowArrow className="mr-2 h-4 w-4" />
                    Generate Flowchart
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Output and Analysis Section */}
        <div className="flex flex-col">
          <Tabs defaultValue="output" className="flex-grow flex flex-col">
            <TabsList>
              <TabsTrigger value="output">Output</TabsTrigger>
              <TabsTrigger value="complexity">Time Complexity</TabsTrigger>
              <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            </TabsList>
            <TabsContent value="output" className="flex flex-col flex-grow">
              <div className="bg-code text-code-foreground h-full rounded-lg p-4 overflow-auto font-mono text-sm">
                {output || "Run the code to see output..."}
              </div>
            </TabsContent>
            <TabsContent value="complexity" className="flex flex-col flex-grow">
              <div className="bg-code text-code-foreground h-full rounded-lg p-4 overflow-auto font-mono text-sm">
                {timeComplexity || "Calculate time complexity to see analysis..."}
              </div>
            </TabsContent>
            <TabsContent value="suggestions" className="flex flex-col flex-grow">
              <div className="bg-code text-code-foreground h-full rounded-lg p-4 overflow-auto text-sm">
                <div className="mb-4">
                  <Badge className="bg-yellow-500 mb-2">Suggestion</Badge>
                  <p className="font-mono">Consider using memoization to optimize the factorial calculation for large numbers.</p>
                </div>
                <div>
                  <Badge className="bg-green-500 mb-2">Best Practice</Badge>
                  <p className="font-mono">Add input validation to handle negative numbers.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-4">
            <Button variant="outline" asChild className="w-full">
              <div className="flex items-center justify-center">
                <Code2 className="mr-2 h-4 w-4" />
                Ask AI Mentor for Help
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
