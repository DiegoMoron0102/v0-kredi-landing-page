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
  overlay = "dark" 
}: VideoBackgroundProps) {
  const getOverlayClass = () => {
    switch (overlay) {
      case "light":
        return "bg-white/20"
      case "dark":
        return "bg-black/50"
      case "gradient":
        return "bg-gradient-to-t from-black/80 via-black/40 to-black/60"
      case "none":
        return ""
      default:
        return "bg-black/50"
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
          style={{ filter: "brightness(0.7) contrast(1.1)" }}
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          {/* Fallback para navegadores que no soportan video */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        </video>
        
        {/* Primary Overlay */}
        <div className={`absolute inset-0 ${getOverlayClass()}`} />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        
        {/* Ambient light effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" 
             style={{
               background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)'
             }} />
      </div>
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
