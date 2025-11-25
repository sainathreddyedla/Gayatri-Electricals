"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, User, BookOpen, Wrench, Briefcase, Archive, Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const navItems = [
  { href: "/", label: "HOME", icon: Home },
  { href: "/profile", label: "PROFILE", icon: User },
  { href: "/track-record", label: "TRACK RECORD", icon: Archive },
  { href: "/biography", label: "BIOGRAPHY", icon: BookOpen },
  { href: "/expertise", label: "EXPERTISE", icon: Wrench },
  { href: "/portfolio", label: "PORTFOLIO", icon: Briefcase },
  { href: "/contact", label: "CONTACT", icon: Mail },
]

export function SidebarNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar border border-sidebar-border text-sidebar-foreground transition-all hover:bg-sidebar-accent lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setIsOpen(false)} aria-hidden="true" />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-[296px] border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Profile Avatar */}
        <div className="flex items-center justify-center border-b border-sidebar-border py-10 px-6">
          <div className="relative h-32 w-32 transition-transform duration-300 hover:scale-105">
            <Image src="/raghukula-logo.png" alt="Raghukula Design & Build Solutions" fill className="object-contain scale-[2]" />
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col py-4 px-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-6 py-3.5 my-1 text-sm font-medium tracking-wide transition-all rounded-lg group",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:translate-x-1",
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 transition-all",
                  isActive ? "scale-110" : "group-hover:scale-110"
                )} />
                <span className="text-[13px] font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
