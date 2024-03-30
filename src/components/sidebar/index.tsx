"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constants'


type Props = {}

const Sidebar = (props: Props) => {
    const pathname = usePathname()

    return (
        <nav className="dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 pl-5 pr-8">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link className='flex font-bold flex-row ' href="/">
                    <p className='text-xl font-bold'>Opus</p>
                    <img
                        src='/fuzzieLogo.png'
                        alt='logo'
                        width={15}
                        height={15}
                        className='shadow-sm'
                    />
                    <p className='text-xl font-bold'>Flow</p>
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem)=>(
                        <ul key={menuItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    {/* go to aceternity ui and use the tool tip component*/}
                                </TooltipTrigger>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>

            </div>
        </nav>
    )
}

export default Sidebar