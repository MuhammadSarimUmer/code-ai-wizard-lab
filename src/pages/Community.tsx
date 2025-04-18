
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookmarkPlus, 
  Heart, 
  MessageCircle, 
  MessageSquare, 
  Search, 
  Share, 
  ThumbsUp, 
  User,
  Users 
} from "lucide-react";

// Mock user data
const currentUser = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  avatar: "https://github.com/shadcn.png"
};

// Mock posts data
const discussionPosts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      username: "sarahj",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    title: "Struggling with JavaScript Promises",
    content: "I'm having trouble understanding how to properly chain promises. Can someone explain how to avoid callback hell with async/await?",
    tags: ["javascript", "promises", "async"],
    likes: 24,
    comments: 8,
    time: "2 hours ago",
    solved: true
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      username: "mikechen",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    title: "What's the best approach for data structures in Python?",
    content: "I'm building a program that needs to handle a lot of data operations. Should I use lists, dictionaries, or something else?",
    tags: ["python", "data-structures", "algorithms"],
    likes: 15,
    comments: 12,
    time: "5 hours ago",
    solved: false
  },
  {
    id: 3,
    user: {
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    title: "C++ Memory Management Best Practices",
    content: "I'm working on a C++ project and want to ensure I'm following best practices for memory management. Any tips?",
    tags: ["c++", "memory-management", "best-practices"],
    likes: 32,
    comments: 15,
    time: "1 day ago",
    solved: true
  }
];

// Mock projects data
const projectShowcases = [
  {
    id: 1,
    user: {
      name: "Alex Rivera",
      username: "alexr",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    title: "Weather Dashboard App",
    description: "A weather application built with JavaScript that fetches real-time data from OpenWeather API.",
    tags: ["javascript", "api", "frontend"],
    likes: 47,
    comments: 12,
    time: "3 days ago",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    user: {
      name: "Lily Park",
      username: "lilypark",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    title: "Task Manager CLI",
    description: "A command-line task manager built with Python that helps you organize your daily tasks.",
    tags: ["python", "cli", "productivity"],
    likes: 29,
    comments: 8,
    time: "1 week ago",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=400&auto=format&fit=crop"
  }
];

// Mock events data
const events = [
  {
    id: 1,
    title: "Python Workshop: Web Scraping with BeautifulSoup",
    date: "April 25, 2025",
    time: "2:00 PM - 4:00 PM EDT",
    host: "David Kim",
    attendees: 54,
    virtual: true,
    tags: ["python", "web-scraping", "workshop"]
  },
  {
    id: 2,
    title: "JavaScript Study Group: React Hooks",
    date: "April 30, 2025",
    time: "7:00 PM - 8:30 PM EDT",
    host: "Aisha Patel",
    attendees: 32,
    virtual: true,
    tags: ["javascript", "react", "study-group"]
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("discussions");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground">Connect, share, and learn with fellow developers</p>
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search community..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full md:w-auto min-w-[200px]"
            />
          </div>
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full md:w-[600px]">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="projects">Project Showcase</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discussions" className="mt-6 space-y-6">
          {discussionPosts.map(post => (
            <Card key={post.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={post.user.avatar} alt={post.user.name} />
                    <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{post.user.name}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                          {post.solved && (
                            <>
                              <span>•</span>
                              <Badge variant="outline" className="text-green-500 border-green-500 text-xs font-normal">
                                Solved
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="mt-3 text-muted-foreground">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4 text-sm">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="projects" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectShowcases.map(project => (
              <Card key={project.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src={project.user.avatar} alt={project.user.name} />
                      <AvatarFallback>{project.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{project.user.name}</p>
                      <p className="text-xs text-muted-foreground">{project.time}</p>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </Button>
                    </div>
                    <Button size="sm">View Project</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="events" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            {events.map(event => (
              <Card key={event.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        {event.date} • {event.time} • {event.virtual ? 'Virtual' : 'In-Person'}
                      </div>
                      <div className="text-sm mt-2">Hosted by {event.host}</div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {event.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 md:items-end justify-between">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.attendees} attending</span>
                      </div>
                      <Button>Register</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-center">Host Your Own Event</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Share your knowledge with the community by hosting a workshop or study group.</p>
                <Button>Create Event</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="people" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Connect with Developers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`https://i.pravatar.cc/150?img=${idx + 10}`} />
                      <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-grow">
                      <p className="font-medium">{["Alex Brown", "Marie Chen", "Jamal Wilson", "Sofia Rodriguez", "Ethan Lee", "Amanda Kim"][idx]}</p>
                      <p className="text-xs text-muted-foreground">{["Python Developer", "JavaScript Expert", "C# Enthusiast", "Full Stack Developer", "Data Scientist", "Mobile App Developer"][idx]}</p>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <Button variant="outline">Load More</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
