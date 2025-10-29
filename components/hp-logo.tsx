interface HPLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function HPLogo({ className = "", size = "md" }: HPLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Circle/Helix Background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#gradient)"
          className="drop-shadow-lg"
        />
        
        {/* Helix Design Elements */}
        <path
          d="M 30 25 Q 50 35, 70 25"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 30 75 Q 50 65, 70 75"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* H Letter */}
        <g className="h-letter">
          <path
            d="M 28 35 L 28 65 M 28 50 L 42 50 M 42 35 L 42 65"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* P Letter */}
        <g className="p-letter">
          <path
            d="M 58 35 L 58 65 M 58 35 L 70 35 Q 75 35, 75 42 Q 75 50, 70 50 L 58 50"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Sparkle/Star accent */}
        <circle cx="80" cy="25" r="3" fill="white" opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="20" cy="80" r="2" fill="white" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function HPLogoSimple({ className = "", size = "md" }: HPLogoProps) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-2xl",
  };

  return (
    <div className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white font-bold ${
      size === "sm" ? "h-8 w-8" : size === "lg" ? "h-16 w-16" : size === "xl" ? "h-24 w-24" : "h-10 w-10"
    } ${className} shadow-lg`}>
      <span className={sizeClasses[size]}>
        H
        <span className="relative -ml-0.5">P</span>
      </span>
    </div>
  );
}

