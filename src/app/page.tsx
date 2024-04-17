import Charts from "@/components/dashboard/charts";
import Create_role from "@/components/dashboard/create_role";
import List from "@/components/dashboard/list";
import Tables from "@/components/dashboard/table";
import Utils from "@/components/dashboard/table_utils";

const Sidebar = () => {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto p-4 grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
      <div className="h-full flex flex-wrap lg:flex-nowrap w-screen flex-col gap-4 overflow-x-hidden">
        <span className="text-[14px] text-slate-700 font-semibold">
          Overview
        </span>
        <div className="flex flex-col md:flex-row gap-2">
          <Charts />
          <Utils />
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Create_role />
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
