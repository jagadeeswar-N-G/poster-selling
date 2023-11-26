"use client"
import { PRODUCT_CATOGORIES } from '@/config'
import React, { useRef, useState } from 'react'
import NavItem from './NavItem'
import { useOnClickOutside } from '@/hooks/useOnOutside'

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null
    const navRef = useRef<HTMLDivElement | null >(null)
    useOnClickOutside(navRef, () => setActiveIndex(null)) // we are traking the outside and when we click outside this will track and close the model
  return (
    <div className='flex gap-4 h-full' ref={navRef}> 
        {PRODUCT_CATOGORIES.map((category, key) => {
            const handleOpen = () => {
                if(activeIndex === key){
                    setActiveIndex(null)
                } else {
                    setActiveIndex(key)
                }
            }
            const isOpen = key === activeIndex // if the key === activeIndex, true then isopen becomes true
            return(
                <NavItem
                isAnyOpen = {isAnyOpen}
                category={category}
                handleOpen={handleOpen}
                isOpen={isOpen}
                key={category.value}
                />
            )
        })}
    </div>
  )
}

export default NavItems