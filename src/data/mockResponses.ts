export interface MockResponse {
    id: string;
    question: string;
    answer: string;
    category: string;
    codeExample?: string;
  }
  
  export const mockResponses: MockResponse[] = [
    {
      id: '1',
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces, particularly single-page applications.',
      category: 'react',
      codeExample: `
  const Example = () => {
    return <h1>Hello React!</h1>;
  };
      `
    },
    {
      id: '2',
      question: 'How do I use useState?',
      answer: 'useState is a React Hook that lets you add state to functional components.',
      category: 'react',
      codeExample: `
  const [count, setCount] = useState(0);
      `
    }
  ];