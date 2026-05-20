import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, UserRound, ArrowRight } from 'lucide-react'
import loginbg from '../assets/login_bg.png'

const Login = () => {
  return (
    <div
      className="
      min-h-screen
      w-full
      flex
      items-center
      justify-center
      bg-cover
      bg-center
      bg-no-repeat
      px-4
      font-sans
      relative
      overflow-hidden
      "
      style={{
        backgroundImage: `url(${loginbg})`,
      }}
    >
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px]"></div>

      <div
        className="
        relative
        z-10
        w-full
        max-w-[760px]
        rounded-[24px]
        border
        border-white/25
        bg-white/10
        px-6
        py-10
        text-white
        shadow-[0_18px_60px_rgba(0,0,0,0.42)]
        backdrop-blur-xl
        sm:px-10
        "
      >
        <h1 className="text-center text-4xl font-semibold tracking-wider">
          LOGIN
        </h1>
        <p className="mt-3 text-center text-sm tracking-wide text-white/70">
          Choose your portal to continue
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Link
            to="/login/employee"
            className="
            group
            flex
            min-h-[170px]
            flex-col
            justify-between
            rounded-2xl
            border
            border-white/25
            bg-white/12
            p-6
            transition
            hover:-translate-y-1
            hover:border-sky-200/70
            hover:bg-white/18
            "
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-300/85 text-slate-800">
              <UserRound size={26} />
            </span>
            <span>
              <span className="block text-2xl font-medium">Employee Login</span>
              <span className="mt-2 flex items-center gap-2 text-sm text-white/68">
                Open employee portal
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </span>
          </Link>

          <Link
            to="/login/admin"
            className="
            group
            flex
            min-h-[170px]
            flex-col
            justify-between
            rounded-2xl
            border
            border-white/25
            bg-white/12
            p-6
            transition
            hover:-translate-y-1
            hover:border-indigo-200/70
            hover:bg-white/18
            "
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-300/90 text-slate-900">
              <ShieldCheck size={27} />
            </span>
            <span>
              <span className="block text-2xl font-medium">Admin Login</span>
              <span className="mt-2 flex items-center gap-2 text-sm text-white/68">
                Open admin portal
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
