export class AIMentorService {
    async getResponse(prompt: string): Promise<string> {
      // Mock responses based on the user's input
      const mockResponses: Record<string, string> = {
        "make a c program to print": "#include<stdio.h>\nint main()\n{\n printf('any sentence');\nreturn 0\n}.",
        "typescript": "TypeScript is a strongly typed programming language that builds on JavaScript.",
        "async": "Async/await is a way to handle asynchronous operations in JavaScript.",
      };
  
      // Find a response based on the input prompt
      const lowerCasePrompt = prompt.toLowerCase();
      const response =
        Object.keys(mockResponses).find((key) =>
          lowerCasePrompt.includes(key)
        ) || "default";
  
      // Return the corresponding response or a fallback message
      return mockResponses[response] || "Internet connection error";
    }
  }