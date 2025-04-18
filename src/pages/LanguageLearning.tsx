
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { FileTerminal, FileJson, FilePieChart, FileCode2, Terminal, CheckCircle2, Play, MessageCircle, Award, Trophy, ExternalLink, Code2, Lightbulb, HelpCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Mock lesson content
const lessonContent = {
  python: {
    modules: {
      basics: {
        lessons: {
          intro: {
            title: "Introduction to Python",
            content: `# Introduction to Python

Python is a high-level, interpreted programming language known for its readability and simplicity. It was created by Guido van Rossum and first released in 1991.

## Why Python is Popular

- **Easy to Learn**: Simple syntax similar to English
- **Versatile**: Used in web development, data science, AI, automation, and more
- **Large Community**: Extensive libraries and frameworks
- **Cross-Platform**: Runs on Windows, macOS, Linux, and more

## Your First Python Program

Let's write the classic "Hello, World!" program:

\`\`\`python
print("Hello, World!")
\`\`\`

When you run this code, Python will output: \`Hello, World!\`

## Python Variables

Variables are containers for storing data values. Python has no command for declaring a variable - a variable is created the moment you first assign a value to it.

\`\`\`python
name = "Python Learner"
age = 25
is_student = True

print(name)        # Output: Python Learner
print(age)         # Output: 25
print(is_student)  # Output: True
\`\`\`

## Practice Exercise

Try creating variables to store information about yourself, and then print them out.`,
            practice: `# Your first Python program
# Try printing a personalized greeting

# Write your code below:

`,
            solution: `# Your first Python program
# Try printing a personalized greeting

# Solution:
name = "Python Learner"
print(f"Hello, {name}! Welcome to Python programming.")
`,
            hint: "Use a variable to store your name, then use an f-string (formatted string) to include it in your greeting message."
          },
          variables: {
            title: "Variables and Data Types",
            content: `# Variables and Data Types in Python

Variables in Python are containers for storing data values. Python has several built-in data types.

## Basic Data Types

1. **Strings** - Text enclosed in quotes
2. **Integers** - Whole numbers
3. **Floats** - Decimal numbers
4. **Booleans** - True or False values

## Declaring Variables

In Python, you don't need to declare variable types explicitly:

\`\`\`python
name = "Alice"      # String
age = 30           # Integer
height = 5.8       # Float
is_student = True  # Boolean
\`\`\`

## Type Conversion

You can convert between data types:

\`\`\`python
# String to Integer
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # Output: 30

# Integer to String
num = 100
num_str = str(num)
print("The number is " + num_str)  # Output: The number is 100

# String to Float
price_str = "19.99"
price_float = float(price_str)
print(price_float * 2)  # Output: 39.98
\`\`\`

## Checking Data Types

Use the \`type()\` function to check a variable's data type:

\`\`\`python
x = 10
print(type(x))  # Output: <class 'int'>

y = "Hello"
print(type(y))  # Output: <class 'str'>
\`\`\`

## Practice Exercise

Create variables of different data types and try converting between them.`,
            practice: `# Practice with Python data types
# Create variables and convert between types

# 1. Create a string variable containing a number
number_string = "42"

# 2. Convert it to an integer and add 8 to it
# Write your code here:


# 3. Create a float variable
# Write your code here:


# 4. Convert the float to a string and concatenate with " is the answer"
# Write your code here:

`,
            solution: `# Practice with Python data types
# Create variables and convert between types

# 1. Create a string variable containing a number
number_string = "42"

# 2. Convert it to an integer and add 8 to it
number_int = int(number_string)
result = number_int + 8
print(result)  # Should output 50

# 3. Create a float variable
my_float = 3.14159

# 4. Convert the float to a string and concatenate with " is the answer"
message = str(my_float) + " is the answer"
print(message)  # Should output "3.14159 is the answer"
`,
            hint: "Remember to use int() for string to integer conversion, and str() for converting numbers to strings."
          },
          operators: {
            title: "Operators and Expressions",
            content: `# Operators and Expressions in Python

Operators are special symbols that perform operations on variables and values.

## Arithmetic Operators

- \`+\` Addition
- \`-\` Subtraction
- \`*\` Multiplication
- \`/\` Division (returns float)
- \`//\` Floor Division (returns integer)
- \`%\` Modulus (remainder)
- \`**\` Exponentiation

\`\`\`python
x = 10
y = 3

print(x + y)   # 13
print(x - y)   # 7
print(x * y)   # 30
print(x / y)   # 3.3333...
print(x // y)  # 3
print(x % y)   # 1
print(x ** y)  # 1000 (10^3)
\`\`\`

## Comparison Operators

- \`==\` Equal to
- \`!=\` Not equal to
- \`>\` Greater than
- \`<\` Less than
- \`>=\` Greater than or equal to
- \`<=\` Less than or equal to

\`\`\`python
a = 5
b = 7

print(a == b)  # False
print(a != b)  # True
print(a > b)   # False
print(a < b)   # True
print(a >= 5)  # True
print(b <= 6)  # False
\`\`\`

## Logical Operators

- \`and\` Returns True if both statements are true
- \`or\` Returns True if one of the statements is true
- \`not\` Reverse the result

\`\`\`python
p = True
q = False

print(p and q)  # False
print(p or q)   # True
print(not p)    # False
\`\`\`

## Practice Exercise

Write a program that uses different operators to perform calculations and comparisons.`,
            practice: `# Practice with Python operators
# Try implementing different operations

# Given values
a = 15
b = 4

# 1. Calculate the remainder when a is divided by b
# Write your code here:


# 2. Check if a is greater than 10 AND b is less than 5
# Write your code here:


# 3. Calculate a to the power of b
# Write your code here:

`,
            solution: `# Practice with Python operators
# Try implementing different operations

# Given values
a = 15
b = 4

# 1. Calculate the remainder when a is divided by b
remainder = a % b
print(f"Remainder of {a} ÷ {b}: {remainder}")  # Should output 3

# 2. Check if a is greater than 10 AND b is less than 5
check_condition = a > 10 and b < 5
print(f"Is a > 10 AND b < 5? {check_condition}")  # Should output True

# 3. Calculate a to the power of b
power_result = a ** b
print(f"{a} to the power of {b}: {power_result}")  # Should output 50625
`,
            hint: "Use the modulus operator (%) to find remainders, the 'and' keyword for logical AND operations, and the power operator (**) for exponentiation."
          }
        }
      },
      "control-flow": {
        lessons: {
          conditionals: {
            title: "Conditional Statements",
            content: `# Conditional Statements in Python

Conditional statements allow you to execute certain code blocks based on whether a condition is true or false.

## If Statement

The \`if\` statement executes a block of code if a specified condition is true.

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
\`\`\`

## If-Else Statement

The \`if-else\` statement executes one block if the condition is true and another if it's false.

\`\`\`python
age = 16

if age >= 18:
    print("You can vote")
else:
    print("You cannot vote yet")
\`\`\`

## If-Elif-Else Statement

The \`if-elif-else\` chain tests multiple conditions and executes the block associated with the first true condition.

\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print("Your grade is:", grade)
\`\`\`

## Nested If Statements

You can place if statements inside other if statements.

\`\`\`python
age = 25
income = 50000

if age > 18:
    if income > 30000:
        print("You qualify for a loan")
    else:
        print("Income too low for a loan")
else:
    print("Age requirement not met")
\`\`\`

## Practice Exercise

Write a program that determines a student's grade based on their score and provides additional feedback.`,
            practice: `# Grading system with feedback
# Write a program that determines a student's grade and provides feedback

# Given student's score
score = 78

# Determine the grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60)
# Write your code here:


# Provide feedback based on the grade
# A: "Excellent work!"
# B: "Good job!"
# C: "Satisfactory"
# D: "Needs improvement"
# F: "Please see the instructor"
# Write your code here:

`,
            solution: `# Grading system with feedback
# Write a program that determines a student's grade and provides feedback

# Given student's score
score = 78

# Determine the grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60)
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")

# Provide feedback based on the grade
if grade == "A":
    feedback = "Excellent work!"
elif grade == "B":
    feedback = "Good job!"
elif grade == "C":
    feedback = "Satisfactory"
elif grade == "D":
    feedback = "Needs improvement"
else:
    feedback = "Please see the instructor"

print(feedback)
`,
            hint: "Use if-elif-else statements to determine the grade first, then use another if-elif-else construct or a dictionary to match the appropriate feedback to the grade."
          }
        }
      }
    }
  },
  javascript: {
    modules: {
      basics: {
        lessons: {
          intro: {
            title: "Introduction to JavaScript",
            content: `# Introduction to JavaScript

JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It was created by Brendan Eich at Netscape in 1995.

## Why JavaScript is Important

- **Universal Language**: Runs in all web browsers
- **Versatile**: Used for front-end, back-end (Node.js), mobile apps, and more
- **Event-driven**: Responds to user interactions
- **Dynamic**: Can manipulate HTML and CSS dynamically

## Your First JavaScript Program

Let's write the classic "Hello, World!" program:

\`\`\`javascript
console.log("Hello, World!");
\`\`\`

When you run this code, JavaScript will output: \`Hello, World!\`

## JavaScript Variables

In modern JavaScript, we use \`let\` and \`const\` to declare variables:

\`\`\`javascript
// Using let for variables that will change
let name = "JavaScript Learner";
let age = 25;

// Using const for variables that won't change
const IS_STUDENT = true;

console.log(name);        // Output: JavaScript Learner
console.log(age);         // Output: 25
console.log(IS_STUDENT);  // Output: true
\`\`\`

## Practice Exercise

Try creating variables to store information about yourself, and then log them to the console.`,
            practice: `// Your first JavaScript program
// Try printing a personalized greeting

// Write your code below:


`,
            solution: `// Your first JavaScript program
// Try printing a personalized greeting

// Solution:
const name = "JavaScript Learner";
console.log(\`Hello, \${name}! Welcome to JavaScript programming.\`);
`,
            hint: "Use a variable to store your name, then use a template literal (backticks ` `) with ${} to include the variable in your greeting message."
          }
        }
      }
    }
  }
};

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
    projects: [
      {
        id: "calculator",
        title: "Calculator App",
        difficulty: "Beginner",
        completed: false,
        description: "Build a basic calculator with HTML, CSS, and JavaScript."
      },
      {
        id: "todo-app-js",
        title: "To-Do List Web App",
        difficulty: "Intermediate",
        completed: false,
        description: "Create a web-based to-do list application with local storage."
      }
    ],
    resources: [
      {
        title: "JavaScript Crash Course",
        type: "video",
        url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        source: "Traversy Media"
      },
      {
        title: "MDN JavaScript Guide",
        type: "documentation",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        source: "MDN Web Docs"
      }
    ]
  },
  csharp: {
    name: "C#",
    icon: FilePieChart,
    color: "bg-purple-500",
    progress: 32,
    description: "C# is a modern, object-oriented programming language developed by Microsoft. It's widely used for Windows applications, game development with Unity, and enterprise software.",
    modules: [
      {
        id: "basics",
        title: "C# Basics",
        completed: true,
        progress: 100,
        lessons: [
          { id: "intro", title: "Introduction to C#", completed: true },
          { id: "variables", title: "Variables and Data Types", completed: true },
          { id: "operators", title: "Operators and Expressions", completed: true }
        ]
      },
      {
        id: "control-flow",
        title: "Control Flow",
        completed: false,
        progress: 33,
        lessons: [
          { id: "conditionals", title: "Conditional Statements", completed: true },
          { id: "loops", title: "Loops", completed: false },
          { id: "exceptions", title: "Exception Handling", completed: false }
        ]
      }
    ],
    projects: [
      {
        id: "calculator-csharp",
        title: "Calculator App",
        difficulty: "Beginner",
        completed: false,
        description: "Build a Windows Forms calculator application."
      }
    ],
    resources: [
      {
        title: "C# Programming Guide",
        type: "documentation",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/",
        source: "Microsoft Docs"
      }
    ]
  },
  cpp: {
    name: "C++",
    icon: FileCode2,
    color: "bg-red-500",
    progress: 20,
    description: "C++ is a powerful language that extends C with object-oriented features. It's used for system/software development, game development, and applications requiring high performance.",
    modules: [
      {
        id: "basics",
        title: "C++ Basics",
        completed: true,
        progress: 100,
        lessons: [
          { id: "intro", title: "Introduction to C++", completed: true },
          { id: "variables", title: "Variables and Data Types", completed: true },
          { id: "operators", title: "Operators and Expressions", completed: true }
        ]
      }
    ],
    projects: [
      {
        id: "game-cpp",
        title: "Simple Console Game",
        difficulty: "Intermediate",
        completed: false,
        description: "Create a text-based adventure game in C++."
      }
    ],
    resources: [
      {
        title: "C++ Tutorial",
        type: "documentation",
        url: "https://www.cplusplus.com/doc/tutorial/",
        source: "cplusplus.com"
      }
    ]
  },
  c: {
    name: "C",
    icon: Terminal,
    color: "bg-gray-500",
    progress: 15,
    description: "C is one of the oldest and most influential programming languages. It provides low-level access to memory and is used for operating systems, embedded systems, and performance-critical applications.",
    modules: [
      {
        id: "basics",
        title: "C Basics",
        completed: false,
        progress: 50,
        lessons: [
          { id: "intro", title: "Introduction to C", completed: true },
          { id: "variables", title: "Variables and Data Types", completed: true },
          { id: "operators", title: "Operators and Expressions", completed: false }
        ]
      }
    ],
    projects: [
      {
        id: "file-c",
        title: "File Handling Program",
        difficulty: "Beginner",
        completed: false,
        description: "Create a program that reads and writes to text files."
      }
    ],
    resources: [
      {
        title: "C Programming Language",
        type: "book",
        author: "Brian Kernighan and Dennis Ritchie",
        source: "Classic C Programming Book"
      }
    ]
  }
};

const LessonContent = ({ language, moduleId, lessonId }: { language: string; moduleId: string; lessonId: string }) => {
  const [activeTab, setActiveTab] = useState("content");
  const [code, setCode] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  
  const lessonData = lessonContent[language as keyof typeof lessonContent]?.modules[moduleId as keyof typeof lessonContent[keyof typeof lessonContent]["modules"]]?.lessons[lessonId as keyof typeof lessonContent[keyof typeof lessonContent]["modules"][keyof typeof lessonContent[keyof typeof lessonContent]["modules"]]["lessons"]];
  
  // Set initial practice code
  useState(() => {
    if (lessonData?.practice) {
      setCode(lessonData.practice);
    }
  });

  const handleRunCode = () => {
    toast({
      title: "Code Executed",
      description: "Your code ran successfully!",
    });
  };

  const handleShowHint = () => {
    toast({
      title: "Hint",
      description: lessonData?.hint || "No hint available for this exercise.",
    });
  };

  const handleNextLesson = () => {
    toast({
      title: "Great job!",
      description: "Moving to the next lesson...",
    });
  };

  if (!lessonData) {
    return (
      <div className="p-6 text-center">
        <FileTerminal className="h-16 w-16 mx-auto text-muted-foreground opacity-20 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Lesson Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The requested lesson content is not available yet.
        </p>
        <Button asChild>
          <Link to="/learning-paths">Return to Learning Paths</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{lessonData.title}</h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="content">Lesson Content</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none dark:prose-invert">
                {/* This would be a markdown renderer in the real implementation */}
                <div className="whitespace-pre-line">{lessonData.content}</div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={() => setActiveTab("practice")}>
              Continue to Practice
              <Code2 className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="practice" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Code Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    value={code} 
                    onChange={(e) => setCode(e.target.value)}
                    className="font-mono h-80 resize-none bg-muted/30 text-foreground" 
                  />
                  
                  <div className="flex justify-between mt-4">
                    <div className="space-x-2">
                      <Button variant="outline" onClick={handleShowHint}>
                        <Lightbulb className="mr-2 h-4 w-4" />
                        Hint
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowSolution(!showSolution)}
                      >
                        {showSolution ? (
                          <>
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Hide Solution
                          </>
                        ) : (
                          <>
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Show Solution
                          </>
                        )}
                      </Button>
                    </div>
                    <Button onClick={handleRunCode}>
                      <Play className="mr-2 h-4 w-4" />
                      Run Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {showSolution ? "Solution" : "Instructions"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {showSolution ? (
                    <pre className="font-mono text-sm whitespace-pre-wrap bg-muted/30 p-4 rounded-md">
                      {lessonData.solution}
                    </pre>
                  ) : (
                    <div className="prose max-w-none dark:prose-invert">
                      <p>Complete the practice exercise by following the instructions in the code comments.</p>
                      <p>Use the "Hint" button if you get stuck, or reveal the full solution when you're ready to check your work.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("content")}>
              Back to Lesson
            </Button>
            <Button onClick={handleNextLesson}>
              Complete & Continue
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="quiz" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Knowledge Check</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Question 1</h3>
                  <p className="text-sm text-muted-foreground mb-2">Which of the following is the correct way to declare a variable in Python?</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a" className="text-sm">var name = "John"</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b" className="text-sm">name = "John"</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c" className="text-sm">string name = "John"</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Question 2</h3>
                  <p className="text-sm text-muted-foreground mb-2">What will be the output of the following code?</p>
                  <pre className="font-mono text-sm bg-muted/30 p-2 rounded-md mb-2">
                    {`print(10 % 3)`}
                  </pre>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a" className="text-sm">3</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b" className="text-sm">1</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c" className="text-sm">3.33</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>
                  Submit Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const LanguageLearning = () => {
  const { language = "python" } = useParams<{ language: string }>();
  const [selectedTab, setSelectedTab] = useState("modules");
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  
  const languageData = languagesData[language as keyof typeof languagesData] || languagesData.python;
  const { name, icon: Icon, color, progress, description, modules, projects, resources } = languageData;

  const handleAskAIMentor = () => {
    toast({
      title: "AI Mentor",
      description: "Connecting you to your AI mentor...",
    });
  };

  return (
    <div className="space-y-8">
      {selectedModule && selectedLesson ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={() => {
              setSelectedModule(null);
              setSelectedLesson(null);
            }}>
              Back to {name} Learning Path
            </Button>
            <Button onClick={handleAskAIMentor}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Ask AI Mentor
            </Button>
          </div>
          
          <LessonContent 
            language={language} 
            moduleId={selectedModule} 
            lessonId={selectedLesson} 
          />
        </div>
      ) : (
        <>
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
            
            <Button onClick={handleAskAIMentor}>
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
                        
                        <div className="space-y-3 mb-4">
                          {module.lessons.map((lesson) => (
                            <Button
                              key={lesson.id}
                              variant="ghost"
                              className={`flex items-center justify-between w-full p-3 h-auto ${lesson.completed ? 'bg-muted/30' : 'hover:bg-muted/20'}`}
                              onClick={() => {
                                setSelectedModule(module.id);
                                setSelectedLesson(lesson.id);
                              }}
                            >
                              <div className="flex items-center gap-3">
                                {lesson.completed ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                  <div className="h-4 w-4 rounded-full border-2 border-primary" />
                                )}
                                <span className="text-left">{lesson.title}</span>
                              </div>
                              <Play className="h-4 w-4 opacity-50" />
                            </Button>
                          ))}
                        </div>
                        <div className="flex justify-between">
                          <Button variant="outline">Module Details</Button>
                          <Button>
                            {module.completed ? "Review Module" : "Continue Module"}
                          </Button>
                        </div>
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
                            <Button onClick={() => {
                              toast({
                                title: "Project Started",
                                description: `Starting ${project.title}...`,
                              });
                            }}>Start Project</Button>
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
                      <Button onClick={() => setSelectedTab("modules")}>Return to Modules</Button>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="challenges" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Coding Challenges</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">FizzBuzz Challenge</h3>
                          <Badge variant="outline" className="mt-1">Easy</Badge>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Write a program that prints numbers from 1 to 100, but for multiples of 3 print "Fizz" and for multiples of 5 print "Buzz". For numbers which are multiples of both, print "FizzBuzz".
                          </p>
                        </div>
                        <Button onClick={() => {
                          toast({
                            title: "Challenge Started",
                            description: "Starting FizzBuzz Challenge...",
                          });
                        }}>Solve Challenge</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Coding Challenges</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">Palindrome Checker</h3>
                          <Badge variant="outline" className="mt-1">Medium</Badge>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Write a function that checks if a given string is a palindrome (reads the same backward as forward), ignoring spaces, punctuation, and case.
                          </p>
                        </div>
                        <Button onClick={() => {
                          toast({
                            title: "Challenge Started",
                            description: "Starting Palindrome Checker Challenge...",
                          });
                        }}>Solve Challenge</Button>
                      </div>
                    </CardContent>
                  </Card>
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
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/skill-map">View Your Skill Map</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-semibold mb-4">Need Help?</h2>
                  <Button className="w-full mb-2" onClick={handleAskAIMentor}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Ask AI Mentor
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => {
                    toast({
                      title: "Community",
                      description: "Joining community discussion...",
                    });
                  }}>
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageLearning;
