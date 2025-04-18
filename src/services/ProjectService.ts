export class ProjectService {
    async generateProject(templateId: string, options: Record<string, any>): Promise<string> {
      // Mock project generation URL
      return `https://docs.google.com/document/d/11St6KhkJ-eqR54w8zjeQQezZNbgWWQ0LHGcEOx5vt8s/edit?tab=t.0#heading=h.spqe8eh21io`;
    }
  
    async getPremadeProjects(): Promise<{ id: string; name: string; downloadUrl: string }[]> {
      // Mock premade projects
      return [
        { id: '1', name: 'C management system', downloadUrl: 'https://drive.google.com/file/d/1uFm-4ZGy5VmpxPdpnCca9DZi-SaoQRb1/view?usp=sharing' },
        { id: '2', name: 'C++ mangement system', downloadUrl: 'https://drive.google.com/file/d/1PqvO7Tow92SvBOXHfZOAIGwR6MkgBZc_/view?usp=sharing' },
        { id: '3', name: 'Python Tkinter Project', downloadUrl: 'https://example.com/fullstack-template.zip' },
      ];
    }
  }