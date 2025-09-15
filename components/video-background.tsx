"use client"

import React from "react"

interface VideoBackgroundProps {
  src: string
  className?: string
  children?: React.ReactNode
  overlay?: "light" | "dark" | "gradient" | "none"
}

export function VideoBackground({ 
  src, 
  className = "", 
  children, 
  overlay = "light" 
}: VideoBackgroundProps) {
  const getOverlayClass = () => {
    switch (overlay) {
      case "light":
        return "bg-white/30 dark:bg-black/50"
      case "dark":
        return "bg-black/50 dark:bg-black/70"
      case "gradient":
        return "bg-gradient-to-t from-white/70 via-white/30 to-white/50 dark:from-black/70 dark:via-black/30 dark:to-black/50"
      case "none":
        return ""
      default:
        return "bg-white/30 dark:bg-black/50"
    }
  }

  return (
    <div className={`relative overflow-hidden video-container ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ filter: "brightness(1.1) contrast(0.9) saturate(1.2)" }}
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          {/* Fallback para navegadores que no soportan video */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        </video>
        
        {/* Primary Overlay */}
        <div className={`absolute inset-0 ${getOverlayClass()}`} />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/20 dark:from-black/60 dark:via-transparent dark:to-black/20" />
        
        {/* Ambient light effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 dark:from-blue-400/20 dark:via-transparent dark:to-cyan-400/20" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0" 
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(226, 232, 240, 0.3) 100%)'
             }} />
        <div className="absolute inset-0 dark:block hidden" 
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(17, 24, 39, 0.5) 100%)'
             }} />
      </div>
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
