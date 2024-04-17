"use client";

import React from "react";

import {
  ClipboardMinus,
  Database,
  LayoutDashboard,
  LucideIcon,
  UserRoundCog,
  Variable,
} from "lucide-react";
import SidebarItem from "./item";

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

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Reports",
    icon: ClipboardMinus,
    path: "/reports",
    items: [
      {
        name: "Total Spend",
        path: "/reports/total_spend",
      },
      {
        name: "Suppliers",
        path: "/reports/suppliers",
      },
      {
        name: "Transactions",
        path: "/reports/transactions",
      },
      {
        name: "Categories",
        path: "/reports/categories",
      },
      {
        name: "Operations",
        path: "/reports/operations",
      },
      {
        name: "Complaince",
        path: "/reports/compliance",
      },
      {
        name: "Frequent Reports",
        path: "/reports/frequent_reports",
      },
      {
        name: "Recommended",
        path: "/reports/recommended",
      },
    ],
  },
  {
    name: "Data",
    icon: Database,
    path: "/Data",
    items: [
      {
        name: "Quickbooks",
        path: "/Data/quickbooks",
      },
      {
        name: "Netsuite",
        path: "/Data/netsuite",
      },
    ],
  },
  {
    name: "Administration",
    icon: UserRoundCog,
    path: "/administration",
    items: [
      {
        name: "User Settings",
        path: "/administration/user_settings",
      },
      {
        name: "Billing",
        path: "/administration/billing",
      },
      {
        name: "Organization",
        path: "/administration/organization",
      },
    ],
  },
  {
    name: "Task",
    icon: Variable,
    path: "/task",
    items: [
      {
        name: "My Tasks",
        path: "/task/my_tasks",
      },
      {
        name: "Created Tasks",
        path: "/task/created_tasks",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className=" top-0 left-0 h-screen w-64 bg-gray-700 shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        {/* <img 
        className='h-10 w-fit' src='/google-logo-9834.png'
        alt='Logo'
      /> */}
        <div className="flex flex-col space-y-1">
          {items.map((item) => (
            // <p key={item.path}>
            //   {item.name}
            <SidebarItem key={item.path} item={item} />
            // </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
