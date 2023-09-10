import Link from "next/link";
import {Button} from '@nextui-org/button';

export default function Home() {
  return (
    <main>
      <div className="h-screen -mt-20 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-7xl font-bold text-center">
          Organize your work <br /> and life, finally<span className="text-orange-500">.</span>
        </h1>
        <p className="text-xl text-center tracking-widest text-gray-400">
          Become focused, organized, and calm with Todoist. 
          The world's #1 <br /> task manager and to-do list app. 
          <span>Task Hub</span>
        </p>
        <Link href={'/auth/login'}>
          <button className="text-xl ring-2 ring-orange-500 rounded-full py-1.5 px-3 hover:bg-orange-500 transition-all duration-200 hover:px-5">
            <span>Get Started</span>
          </button>
        </Link>
        <Button className="rounded-full">Click me</Button>
      </div>
    </main>
  )
}
