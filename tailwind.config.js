module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
        },
        
        // Secondary Colors
        secondary: {
          DEFAULT: "#64748B", // slate-500
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
        },
        
        // Accent Colors
        accent: {
          DEFAULT: "#0EA5E9", // sky-500
          100: "#E0F2FE", // sky-100
          200: "#BAE6FD", // sky-200
          500: "#0EA5E9", // sky-500
          600: "#0284C7", // sky-600
        },
        
        // Background Colors
        background: "#FEFEFE", // custom warm white
        surface: "#F8FAFC", // slate-50
        
        // Text Colors
        "text-primary": "#1E293B", // slate-800
        "text-secondary": "#475569", // slate-600
        
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        
        warning: {
          DEFAULT: "#D97706", // amber-600
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        
        error: {
          DEFAULT: "#DC2626", // red-600
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        
        // Border Color
        border: "rgba(148, 163, 184, 0.2)", // slate-400 with opacity
      },
      
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        caption: ['Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      },
      
      boxShadow: {
        'professional': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevated': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'modal': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      
      borderRadius: {
        'professional': '8px',
        'interactive': '4px',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      transitionTimingFunction: {
        'professional': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
        'slower': '600ms',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}