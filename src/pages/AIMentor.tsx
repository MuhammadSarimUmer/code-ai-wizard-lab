
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BrainCircuit, 
  FileUp, 
  Image, 
  MessageSquare, 
  PanelLeft, 
  Send, 
  TerminalSquare,
  Trash,
  CheckCircle2
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'assistant',
    content: 'Hi there! I\'m your AI coding mentor. I can help you with programming questions, explain concepts, debug code, and more. What would you like to learn today?',
    timestamp: new Date(),
  },
];

const AIMentor = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    // AI response logic - would be connected to a real AI service
    setTimeout(() => {
      const aiResponses: {[key: string]: string} = {
        "help": "I'd be happy to help you! What programming language or concept are you working with?",
        "python": "Python is a versatile programming language known for its readability and wide range of applications. What specific aspect of Python would you like to learn about?",
        "javascript": "JavaScript is the language of the web. It allows you to create interactive elements on websites. What part of JavaScript are you interested in?",
        "error": "To help debug your error, I'll need to see the code and error message. Could you share the relevant code snippet?",
        "algorithm": "Algorithms are step-by-step procedures for solving problems. There are many types like sorting, searching, and graph algorithms. Which one interests you?"
      };
      
      // Analyze input to determine appropriate response
      const lowerInput = input.toLowerCase();
      let responseContent = "I'll help you with that. Could you provide more details about what you're working on?";
      
      if (lowerInput.includes("help")) {
        responseContent = aiResponses.help;
      } else if (lowerInput.includes("python")) {
        responseContent = aiResponses.python;
      } else if (lowerInput.includes("javascript") || lowerInput.includes("js")) {
        responseContent = aiResponses.javascript;
      } else if (lowerInput.includes("error") || lowerInput.includes("bug") || lowerInput.includes("fix")) {
        responseContent = aiResponses.error;
      } else if (lowerInput.includes("algorithm")) {
        responseContent = aiResponses.algorithm;
      }

      const newAssistantMessage: Message = {
        id: messages.length + 2,
        role: 'assistant',
        content: responseContent,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newAssistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded and is being analyzed.`,
      });
      
      // AI file analysis logic - would be connected to a real AI service
      setTimeout(() => {
        const newAssistantMessage: Message = {
          id: messages.length + 1,
          role: 'assistant',
          content: `I've analyzed ${file.name}. It looks like a well-structured ${file.name.split('.').pop()} file. Is there anything specific you'd like me to explain or modify?`,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, newAssistantMessage]);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearConversation = () => {
    setMessages(initialMessages);
    toast({
      title: "Conversation cleared",
      description: "Your chat history has been reset.",
    });
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] overflow-hidden">
      {/* Sidebar */}
      {showSidebar && (
        <div className="w-64 border-r h-full flex flex-col bg-background">
          <div className="p-4 border-b">
            <h2 className="font-semibold">AI Mentor</h2>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <Button variant="outline" className="w-full justify-start" onClick={clearConversation}>
              <MessageSquare className="mr-2 h-4 w-4" />
              New Chat
            </Button>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Recent chats</h3>
              <div className="space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-xs h-auto py-1.5"
                  onClick={() => handleSuggestionClick("How do I use Python list comprehensions?")}
                >
                  Python list comprehensions
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-xs h-auto py-1.5"
                  onClick={() => handleSuggestionClick("Explain JavaScript async functions")}
                >
                  JavaScript async functions
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-xs h-auto py-1.5"
                  onClick={() => handleSuggestionClick("Help with C++ memory management")}
                >
                  C++ memory management
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Tools</h3>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start text-xs h-auto py-1.5">
                  <FileUp className="mr-2 h-3 w-3" />
                  Upload code file
                </Button>
                <Button variant="ghost" className="w-full justify-start text-xs h-auto py-1.5">
                  <Image className="mr-2 h-3 w-3" />
                  Upload image
                </Button>
                <Button variant="ghost" className="w-full justify-start text-xs h-auto py-1.5">
                  <TerminalSquare className="mr-2 h-3 w-3" />
                  Code examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        <div className="border-b flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <PanelLeft className="h-4 w-4" />
            </Button>
            <h2 className="font-semibold">AI Mentor Chat</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={clearConversation}>
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {message.role === 'assistant' && (
                    <BrainCircuit className="h-4 w-4" />
                  )}
                  <span className="font-medium capitalize">{message.role}</span>
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-4 bg-muted">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 bg-foreground/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 bg-foreground/60 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t">
          <Tabs defaultValue="chat">
            <TabsList className="mb-4">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="upload">Upload</TabsTrigger>
            </TabsList>
            <TabsContent value="chat">
              <div className="relative">
                <Textarea
                  placeholder="Ask me anything about coding..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="pr-12 resize-none"
                  rows={3}
                />
                <Button
                  size="icon"
                  className="absolute right-2 bottom-2"
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="upload">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="code-file">Upload Code File</Label>
                      <Input id="code-file" type="file" onChange={handleFileUpload} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="image-file">Upload Image of Code</Label>
                      <Input id="image-file" type="file" accept="image/*" onChange={handleFileUpload} />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Supported file types: .py, .js, .html, .css, .cpp, .c, .cs, .java, .json, .txt, .png, .jpg
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => handleSuggestionClick("Help me debug this code")}
            >
              Help me debug this code
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => handleSuggestionClick("Explain this concept")}
            >
              Explain this concept
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => handleSuggestionClick("Optimize this algorithm")}
            >
              Optimize this algorithm
            </Badge>
            <Badge 
              variant="outline" 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => handleSuggestionClick("Generate a code example")}
            >
              Generate a code example
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMentor;
