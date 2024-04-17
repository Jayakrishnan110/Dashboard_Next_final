"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react'

interface ISubItem {
    name: string;
    path: string;
  }

const SubMenuItem = ({ item }: { item: ISubItem }) => {
    const {name, path} = item;

    const pathname = usePathname();


    const isActive = useMemo(() => {
        return path === pathname;
    }, [path, pathname])

  return (
    <Link href={path} className={`text-sm hover:text-sidebar-active hover:font-semibold cursor-pointer text-sidebar-iconcolor ${isActive && "text-sidebar-active font-semibold"}`}
    >
        {name}
    </Link>
  )
}

export default SubMenuItem;