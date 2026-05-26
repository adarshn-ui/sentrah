import React, { useState } from "react";

export function HoverBorderGradient({
  children,
  containerClassName = "",
  className = "",
  as: Tag = "button",
  duration = 6,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-[1px] flex overflow-hidden items-center justify-center transition-all duration-300 ${containerClassName}`}
      {...props}
    >
      {/* Animated Rotating Conic-Gradient Border */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? "opacity-100 scale-105" : "opacity-40"
        }`}
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, #06b6d4 0%, #1e3a8a 25%, #06b6d4 50%, #1e3a8a 75%, #06b6d4 100%)`,
          animation: `spinBorder ${duration}s linear infinite ${
            clockwise ? "normal" : "reverse"
          }`,
        }}
      />

      {/* Internal Content Container covering the center */}
      <div
        className={`relative z-10 w-full h-full rounded-[inherit] transition-colors duration-300 ${className}`}
      >
        {children}
      </div>

      {/* Custom Styles for Spin Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinBorder {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}} />
    </Tag>
  );
}
