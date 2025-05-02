
import React from "react";
import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName = string;

export interface IconProps extends LucideProps {
  name: IconName;
  fallback?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, fallback, className, ...props }, ref) => {
    const getIcon = () => {
      const iconName = name.endsWith("Icon") ? name : `${name}Icon`;
      
      // @ts-ignore - dynamic access to named exports
      const LucideIcon = LucideIcons[name] || LucideIcons[iconName];
      
      if (LucideIcon) {
        return <LucideIcon className={cn(className)} ref={ref} {...props} />;
      }
      
      if (fallback) {
        const FallbackIcon = 
          // @ts-ignore - dynamic access to named exports
          LucideIcons[fallback] || LucideIcons[`${fallback}Icon`];
        
        if (FallbackIcon) {
          return <FallbackIcon className={cn(className)} ref={ref} {...props} />;
        }
      }
      
      // Default fallback icon if nothing else works
      return <LucideIcons.HelpCircleIcon className={cn(className)} ref={ref} {...props} />;
    };
    
    return getIcon();
  }
);

Icon.displayName = "Icon";

export default Icon;
