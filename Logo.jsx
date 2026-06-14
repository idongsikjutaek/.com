import React from 'react';

function Logo({ className = "w-full h-auto" }) {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 300" width="100%" height="100%">
        {/* Geometric Abstract Cluster Icon */}
        <g fill="#FFFFFF" transform="translate(30, 25)">
          {/* Central Hexagonal Core Spaces built via intersection pieces */}
          {/* Top Capsule Capsule Piece */}
          <rect x="90" y="30" width="45" height="75" rx="22.5" transform="rotate(0 112.5 67.5)" />
          {/* Bottom Capsule Piece */}
          <rect x="90" y="145" width="45" height="75" rx="22.5" transform="rotate(0 112.5 182.5)" />
          
          {/* Right Upper Slanted Capsule */}
          <rect x="150" y="55" width="45" height="75" rx="22.5" transform="rotate(45 172.5 92.5)" />
          {/* Left Lower Slanted Capsule */}
          <rect x="30" y="120" width="45" height="75" rx="22.5" transform="rotate(45 52.5 157.5)" />

          {/* Right Lower Slanted Capsule */}
          <rect x="150" y="120" width="45" height="75" rx="22.5" transform="rotate(-45 172.5 157.5)" />
          {/* Left Upper Slanted Capsule */}
          <rect x="30" y="55" width="45" height="75" rx="22.5" transform="rotate(-45 52.5 92.5)" />

          {/* Direct Horizontal Side Elements */}
          <rect x="160" y="88" width="45" height="75" rx="22.5" transform="rotate(90 182.5 125.5)" />
          <rect x="20" y="88" width="45" height="75" rx="22.5" transform="rotate(90 42.5 125.5)" />
          
          {/* Inner negative contrast geometry defining the clean shard look */}
          <polygon points="112.5,90 148,110 148,142 112.5,122" fill="#3D5259" opacity="0.15" />
          <polygon points="112.5,90 77,110 77,142 112.5,122" fill="#3D5259" opacity="0.15" />
        </g>

        {/* Clean Corporate Typography Matching the Capsule Castle Alignment */}
        <text 
          x="320" 
          y="130" 
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-weight="700" 
          font-size="64" 
          letter-spacing="1" 
          fill="#FFFFFF"
        >
          IDONGSIK
        </text>
        
        <text 
          x="320" 
          y="205" 
          font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          font-weight="700" 
          font-size="64" 
          letter-spacing="1" 
          fill="#FFFFFF"
        >
          JUTAEK.
        </text>
      </svg>
    </div>
  );
}

export default Logo