"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ChevronDown, LucideIcon } from "lucide-react";
import SubMenuItem from "./submenu-item";

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const onclick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    router.push(path);
  };

  const isActive = useMemo(() => {
    if (items && items?.length > 0) {
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }

    return path === pathname;
  }, [path, pathname, items]);

  return (
    <>
      <div
        className={`flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between  ${
          isActive ? "text-sidebar-active bg-sidebar-background" : "text-white"
        }`}
        onClick={onclick}
      >
        <div className="flex items-center space-x-2">
          <Icon size={18} />
          <p className="text-[12px] font-semibold"> {name} </p>
        </div>
        {items && items.length > 0 && (
          <ChevronDown
            size={20}
            className={expanded ? "rotate-180 duration-200" : ""}
          />
        )}
      </div>

      {expanded && items && items.length > 0 && (
        <div className="flex flex-col space-y-2 ml-10 mt-3">
          {items.map((item) => (
            <SubMenuItem key={item.path} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
