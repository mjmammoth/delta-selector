import { SVGProps } from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex bg-gray-900 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm text-gray-400">© 2024 Mark Marryatt. All rights reserved.</p>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <GithubIcon className="h-5 w-5" />
          <span>
            This project is
            <Link className="font-medium underline underline-offset-4 hover:text-white mx-1" href="https://github.com/mjmammoth/delta-selector" target="_blank">
              open source
            </Link>
          </span>
        </div>
        <p className="text-sm text-gray-400">All data is processed locally on your device.</p>
      </div>
    </footer>
  )
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
