
import { Progress } from "@/components/ui/progress";

// Mock data for user progress
const languages = [
  { name: "Python", progress: 65, color: "bg-theme-blue" },
  { name: "JavaScript", progress: 48, color: "bg-theme-yellow" },
  { name: "C#", progress: 32, color: "bg-theme-purple" },
  { name: "C++", progress: 20, color: "bg-theme-red" },
  { name: "C", progress: 15, color: "bg-theme-gray" }
];

const ProgressSection = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Your Progress</h2>
        <a href="/skill-map" className="text-primary text-sm">View Skill Map</a>
      </div>
      
      <div className="space-y-4">
        {languages.map(language => (
          <div key={language.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{language.name}</span>
              <span className="text-xs text-muted-foreground">{language.progress}%</span>
            </div>
            <Progress
              value={language.progress}
              className="h-2"
              indicatorClassName={language.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSection;
