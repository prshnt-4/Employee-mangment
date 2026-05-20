import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import loginbg from "../assets/login_bg.png" // Updated extension to match your PNG format

const LoginForm = ({ title = "LOGIN", subtitle = "Enter your credentials to continue", role }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className="
      h-screen
      w-screen
      flex
      items-center
      justify-center
      md:justify-end
      md:pr-40
      bg-cover
      bg-center
      bg-no-repeat
      overflow-hidden
      relative
      font-sans
      "
      style={{
        backgroundImage: `url(${loginbg})`,
      }}
    >
   
      <div className="absolute inset-0 bg-black/10"></div>

     
      <div
        className="
        relative
        w-[400px]
        px-10
        py-14
        rounded-[24px]
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-[0_12px_40px_rgba(0,0,0,0.4)]
        text-white
        overflow-hidden
        z-10
        margin-4
        "
      >
       
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/15
          via-transparent
          to-black/20
          pointer-events-none
          "
        ></div>

       
        <div className="relative z-10 flex flex-col">

          <h1
            className="
            text-4xl
            font-semibold
            tracking-wider
            text-center
            mb-2
            "
          >
            {title}
          </h1>

          <p className="text-center text-white/70 mb-10 text-xs tracking-wide">
            {subtitle}
          </p>

 
          <div className="mb-5 relative flex items-center">
            <span className="absolute left-4 text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="USERNAME"
              className="
              w-full
              pl-12
              pr-5
              py-3.5
              rounded-full
              bg-white/10
              border
              border-white/20
              text-white
              text-sm
              placeholder-white/40
              tracking-wider
              focus:outline-none
              focus:border-white/40
              transition-colors
              "
            />
          </div>

  
          <div className="mb-3 relative flex items-center">
            <span className="absolute left-4 text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="PASSWORD"
              className="
              w-full
              pl-12
              pr-12
              py-3.5
              rounded-full
              bg-white/10
              border
              border-white/20
              text-white
              text-sm
              placeholder-white/40
              tracking-wider
              focus:outline-none
              focus:border-white/40
              transition-colors
              "
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="
              absolute
              right-4
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              text-white/50
              transition
              hover:bg-white/10
              hover:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-white/25
              "
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

         
          <div className="flex justify-end mb-8">
            <button
              className="
              text-[10px]
              text-white/50
              hover:text-white
              tracking-widest
              transition
              "
            >
              FORGOT PASSWORD?
            </button>
          </div>

          <button
            className="
            w-full
            py-3.5
            rounded-full
            bg-[#2b427e]
            hover:bg-[#344f94]
            transition-colors
            duration-300
            text-sm
            font-medium
            tracking-widest
            shadow-md
            "
          >
            LOG IN
          </button>

          <div
            className="
            flex
            justify-center
            gap-4
            text-[11px]
            text-white/60
            mt-8
            tracking-widest
            font-light
            "
          >
            <button className="hover:text-white transition">SIGN UP</button>
           
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginForm
 