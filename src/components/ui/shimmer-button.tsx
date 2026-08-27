import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  background?: string;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, shimmerColor = "#ffffff", shimmerSize = "0.05em", background = "#64ffda", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-300",
          "hover:shadow-lg",
          className
        )}
        style={{ background }}
        {...props}
      >
        <span
          className="absolute inset-0 -translate-x-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}33, ${shimmerColor}66, ${shimmerColor}33, transparent)`,
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
            width: "50%",
          }}
        />
        <span className="relative z-10">{children}</span>
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}</style>
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";