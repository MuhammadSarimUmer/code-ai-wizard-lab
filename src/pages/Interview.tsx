
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Check, 
  CheckCircle2, 
  Clock, 
  FileJson, 
  FileTerminal, 
  Timer, 
  Trophy 
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Mock interview question data
const questions = {
  javascript: {
    beginner: [
      {
        id: 1,
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        options: [
          "There is no difference",
          "'let' is block-scoped while 'var' is function-scoped",
          "'var' is block-scoped while 'let' is function-scoped",
          "'let' cannot be reassigned"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How do you declare a function in JavaScript?",
        options: [
          "function myFunction() {}",
          "def myFunction() {}",
          "function: myFunction() {}",
          "func myFunction() {}"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Which operator is used for strict equality comparison in JavaScript?",
        options: [
          "==",
          "===",
          "=",
          "!="
        ],
        correctAnswer: 1
      }
    ],
    intermediate: [],
    advanced: []
  },
  python: {
    beginner: [
      {
        id: 1,
        question: "What is the correct way to create a function in Python?",
        options: [
          "function myFunction():",
          "def myFunction():",
          "create myFunction():",
          "func myFunction():"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "How do you create a list in Python?",
        options: [
          "list = (1, 2, 3)",
          "list = [1, 2, 3]",
          "list = {1, 2, 3}",
          "list = 1, 2, 3"
        ],
        correctAnswer: 1
      }
    ],
    intermediate: [],
    advanced: []
  }
};

// Simulated quiz results
const quizResults = [
  {
    language: "JavaScript",
    difficulty: "Beginner",
    score: 9,
    total: 10,
    date: "2023-04-15",
    timeSpent: "14:23"
  },
  {
    language: "Python",
    difficulty: "Beginner",
    score: 7,
    total: 10,
    date: "2023-04-12",
    timeSpent: "12:09"
  }
];

const Interview = () => {
  const [activeTab, setActiveTab] = useState("practice");
  const [language, setLanguage] = useState("javascript");
  const [difficulty, setDifficulty] = useState("beginner");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds

  const currentQuestions = questions[language as keyof typeof questions]?.[difficulty as keyof typeof questions.javascript] || [];
  
  const startQuiz = () => {
    setQuizStarted(true);
    setTimerRunning(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setTimeRemaining(600); // Reset timer
    
    // Start timer
    const timerInterval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setTimerRunning(false);
          toast({
            title: "Time's up!",
            description: "Your quiz has been submitted automatically.",
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Clean up interval
    return () => clearInterval(timerInterval);
  };

  const submitQuiz = () => {
    setQuizStarted(false);
    setTimerRunning(false);
    
    // Calculate score
    let score = 0;
    Object.keys(selectedAnswers).forEach(questionId => {
      const question = currentQuestions.find(q => q.id === parseInt(questionId));
      if (question && selectedAnswers[parseInt(questionId)] === question.correctAnswer) {
        score++;
      }
    });
    
    toast({
      title: "Quiz Submitted!",
      description: `You scored ${score} out of ${currentQuestions.length}.`,
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Interview Preparation</h1>
          <p className="text-muted-foreground">Master interview questions and prepare for technical assessments</p>
        </div>
        
        <Button>
          <BookOpen className="mr-2 h-4 w-4" />
          Study Resources
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="practice">Practice Questions</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="practice" className="mt-6">
          {!quizStarted ? (
            <Card>
              <CardHeader>
                <CardTitle>Start Interview Practice</CardTitle>
                <CardDescription>Test your knowledge with a set of interview questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="language">Programming Language</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger id="language">
                        <SelectValue />
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
                  
                  <div className="grid gap-2">
                    <Label htmlFor="difficulty">Difficulty Level</Label>
                    <Select value={difficulty} onValueChange={setDifficulty}>
                      <SelectTrigger id="difficulty">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="questions">Number of Questions</Label>
                    <Select defaultValue="10">
                      <SelectTrigger id="questions">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Questions</SelectItem>
                        <SelectItem value="10">10 Questions</SelectItem>
                        <SelectItem value="15">15 Questions</SelectItem>
                        <SelectItem value="20">20 Questions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="time">Time Limit</Label>
                    <Select defaultValue="10">
                      <SelectTrigger id="time">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Minutes</SelectItem>
                        <SelectItem value="10">10 Minutes</SelectItem>
                        <SelectItem value="15">15 Minutes</SelectItem>
                        <SelectItem value="30">30 Minutes</SelectItem>
                        <SelectItem value="0">No Limit</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button
                    onClick={startQuiz}
                    disabled={currentQuestions.length === 0}
                  >
                    <Timer className="mr-2 h-4 w-4" />
                    Start Practice
                  </Button>
                  
                  {currentQuestions.length === 0 && (
                    <p className="text-sm text-destructive text-center">
                      No questions available for this language and difficulty. Please select another option.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-lg">
                        Quiz: {language.charAt(0).toUpperCase() + language.slice(1)} {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </CardTitle>
                      <CardDescription>
                        Question {currentQuestion + 1} of {currentQuestions.length}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">
                        <Clock className="inline mr-2 h-5 w-5" />
                        {formatTime(timeRemaining)}
                      </div>
                      <span className="text-xs text-muted-foreground">Time remaining</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <Progress
                        value={((currentQuestion + 1) / currentQuestions.length) * 100}
                        className="h-2"
                      />
                    </div>
                    
                    <div className="py-4">
                      <h3 className="text-xl font-medium mb-4">
                        {currentQuestions[currentQuestion]?.question}
                      </h3>
                      
                      <RadioGroup
                        value={selectedAnswers[currentQuestions[currentQuestion]?.id]?.toString()}
                        onValueChange={(value) => {
                          setSelectedAnswers(prev => ({
                            ...prev,
                            [currentQuestions[currentQuestion].id]: parseInt(value)
                          }));
                        }}
                      >
                        <div className="space-y-3">
                          {currentQuestions[currentQuestion]?.options.map((option, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50"
                            >
                              <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                              <Label htmlFor={`option-${idx}`} className="flex-grow cursor-pointer">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                        disabled={currentQuestion === 0}
                      >
                        Previous
                      </Button>
                      
                      {currentQuestion < currentQuestions.length - 1 ? (
                        <Button
                          onClick={() => setCurrentQuestion(prev => Math.min(currentQuestions.length - 1, prev + 1))}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button onClick={submitQuiz}>
                          Submit Quiz
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-10 gap-2">
                {currentQuestions.map((_, idx) => (
                  <Button
                    key={idx}
                    variant={selectedAnswers[currentQuestions[idx]?.id] !== undefined ? "default" : "outline"}
                    className="h-10 w-10 p-0"
                    onClick={() => setCurrentQuestion(idx)}
                  >
                    {idx + 1}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="quizzes" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground py-1 px-3 text-xs font-semibold rounded-bl-lg">
                Popular
              </div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                    <FileJson className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>JavaScript Essentials</CardTitle>
                    <CardDescription>Beginner Level • 10 Questions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Average Score</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completion Time</span>
                    <span className="font-medium">8:30 mins</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Attempts</span>
                    <span className="font-medium">543</span>
                  </div>
                  <Button className="mt-3">Start Quiz</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <FileTerminal className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>Python Deep Dive</CardTitle>
                    <CardDescription>Intermediate Level • 15 Questions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Average Score</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completion Time</span>
                    <span className="font-medium">12:45 mins</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Attempts</span>
                    <span className="font-medium">319</span>
                  </div>
                  <Button className="mt-3">Start Quiz</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>Coding Challenges</CardTitle>
                    <CardDescription>Mixed Languages • 8 Questions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Average Score</span>
                    <span className="font-medium">58%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completion Time</span>
                    <span className="font-medium">15:20 mins</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Attempts</span>
                    <span className="font-medium">287</span>
                  </div>
                  <Button className="mt-3">Start Quiz</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Quiz History</CardTitle>
              <CardDescription>Track your performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {quizResults.length > 0 ? (
                  quizResults.map((result, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${
                            result.language === "JavaScript" ? "bg-yellow-500/10 text-yellow-500" : 
                            result.language === "Python" ? "bg-blue-500/10 text-blue-500" : 
                            "bg-primary/10 text-primary"
                          } flex items-center justify-center`}>
                            {result.language === "JavaScript" ? (
                              <FileJson className="h-5 w-5" />
                            ) : result.language === "Python" ? (
                              <FileTerminal className="h-5 w-5" />
                            ) : (
                              <CheckCircle2 className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{result.language} {result.difficulty}</h3>
                            <p className="text-xs text-muted-foreground">Completed on {result.date}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 items-center">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Check className="h-3 w-3" />
                            Score: {result.score}/{result.total}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Time: {result.timeSpent}
                          </Badge>
                          <Button variant="ghost" size="sm">Review</Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <Trophy className="mx-auto h-12 w-12 text-muted-foreground opacity-20 mb-3" />
                    <p>You haven't completed any quizzes yet.</p>
                    <Button className="mt-4" onClick={() => setActiveTab("practice")}>
                      Start a Quiz
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Interview;
