
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Code, Terminal } from "lucide-react";

const mockActivities = [
  {
    id: 1,
    type: "lesson",
    title: "Completed JavaScript Functions",
    time: "2 hours ago",
    icon: Check
  },
  {
    id: 2,
    type: "challenge",
    title: "Python List Comprehension Challenge",
    time: "Yesterday",
    icon: Code
  },
  {
    id: 3,
    type: "project",
    title: "Started Todo App Project",
    time: "2 days ago",
    icon: Terminal
  },
  {
    id: 4,
    type: "quiz",
    title: "C++ Basics Quiz",
    time: "3 days ago",
    icon: Clock
  }
];

const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map(activity => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="mt-1 p-1.5 rounded-full bg-muted">
                <activity.icon className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
