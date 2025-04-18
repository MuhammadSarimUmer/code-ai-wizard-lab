
import { Link } from "react-router-dom";
import { 
  BadgeHelp, 
  BookOpen, 
  BrainCircuit, 
  Code2, 
  FileSpreadsheet, 
  FlowArrow, 
  GraduationCap, 
  Home, 
  MessagesSquare,
  Trophy
} from "lucide-react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";

const links = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/",
  },
  {
    title: "AI Mentor",
    icon: BrainCircuit,
    path: "/ai-mentor",
  },
  {
    title: "Learning Paths",
    icon: BookOpen,
    path: "/learning-paths",
  },
  {
    title: "Skill Map",
    icon: GraduationCap,
    path: "/skill-map",
  },
  {
    title: "Projects",
    icon: FileSpreadsheet,
    path: "/projects",
  },
  {
    title: "Code Editor",
    icon: Code2,
    path: "/editor",
  },
  {
    title: "Interview Prep",
    icon: Trophy,
    path: "/interview",
  },
  {
    title: "Flow Designer",
    icon: FlowArrow,
    path: "/flow-designer",
  },
  {
    title: "Community",
    icon: MessagesSquare,
    path: "/community",
  },
  {
    title: "Help",
    icon: BadgeHelp,
    path: "/help",
  }
];

const Sidebar = () => {
  return (
    <SidebarComponent>
      <SidebarHeader className="text-center py-6">
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            CW
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="py-2">
            <SidebarMenu>
              {links.map((link) => (
                <SidebarMenuItem key={link.path}>
                  <SidebarMenuButton asChild>
                    <Link to={link.path} className="flex items-center gap-3">
                      <link.icon className="h-5 w-5" />
                      <span>{link.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-center text-muted-foreground">
          Code Wizard v1.0.0
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
