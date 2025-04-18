
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";
import ThemeToggle from '@/components/common/ThemeToggle';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="h-16 border-b border-border px-6 flex items-center justify-between bg-background z-10">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Link to="/" className="text-xl font-semibold flex items-center gap-2">
          <span className="text-primary">Code</span>
          <span>Wizard</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center max-w-md w-full relative">
        <Search className="absolute left-3 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-9 bg-secondary/50 rounded-full pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
