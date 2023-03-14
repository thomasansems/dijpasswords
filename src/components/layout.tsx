import React from "react"
import { Plus } from "./icons"
import { Link } from "react-router-dom"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div className="bg-gray-900 min-h-full text-white">
        <div className="flex flex-col">
            <header className="flex-none flex justify-between items-center text-white p-4 border-gray-800 border-b-2">
                <Link to="/">
                    <h1 className="font-bold text-3xl">DIJ Passwords</h1>
                </Link>
                <Link to="/add">
                    <Plus className=" cursor-pointer"></Plus>
                </Link>
            </header>
            <main className="flex-1 mt-4 px-3">
                {children}
            </main>
        </div>
    </div>
)

export default Layout