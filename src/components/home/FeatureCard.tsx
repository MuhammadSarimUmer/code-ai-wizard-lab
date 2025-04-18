
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  className?: string;
  iconClassName?: string;
  color?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  to,
  className,
  iconClassName,
  color = "bg-primary/10 text-primary"
}: FeatureCardProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "feature-card group relative overflow-hidden animate-hover",
        className
      )}
    >
      <div className={cn("feature-card-icon", iconClassName, color)}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="h-5 w-5 text-primary" />
      </div>
    </Link>
  );
};

export default FeatureCard;
