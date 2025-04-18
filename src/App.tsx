
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/components/layouts/MainLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIMentor from "./pages/AIMentor";
import LearningPaths from "./pages/LearningPaths";
import LanguageLearning from "./pages/LanguageLearning";
import SkillMap from "./pages/SkillMap";
import Projects from "./pages/Projects";
import CodeEditor from "./pages/CodeEditor";
import Interview from "./pages/Interview";
import FlowDesigner from "./pages/FlowDesigner";
import Community from "./pages/Community";
import Help from "./pages/Help";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Index /></MainLayout>} />
          <Route path="/ai-mentor" element={<MainLayout><AIMentor /></MainLayout>} />
          <Route path="/learning-paths" element={<MainLayout><LearningPaths /></MainLayout>} />
          <Route path="/learning-paths/:language" element={<MainLayout><LanguageLearning /></MainLayout>} />
          <Route path="/skill-map" element={<MainLayout><SkillMap /></MainLayout>} />
          <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
          <Route path="/editor" element={<MainLayout><CodeEditor /></MainLayout>} />
          <Route path="/interview" element={<MainLayout><Interview /></MainLayout>} />
          <Route path="/flow-designer" element={<MainLayout><FlowDesigner /></MainLayout>} />
          <Route path="/community" element={<MainLayout><Community /></MainLayout>} />
          <Route path="/help" element={<MainLayout><Help /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
