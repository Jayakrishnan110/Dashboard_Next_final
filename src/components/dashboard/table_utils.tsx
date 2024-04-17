const Utils = () => {
  return (
    <div className="w-auto">
      <ul className="flex flex-col gap-y-2 w-auto">
        <li className="flex items-center p-4 gap-x-3 border-2 border-slate-100 rounded-lg">
          <span className="text-lg font-bold text-slate-800">1</span>
          <span className="text-[12px] text-slate-400">Admin</span>
          <img
            src="https://source.unsplash.com/random/?users"
            alt="icon"
            className="w-6 h-6 rounded-full border border-white ml-auto"
          />
        </li>
        <li className="flex items-center p-4 gap-x-3 border-2 border-slate-100 rounded-lg">
          <span className="text-lg font-bold text-slate-800">5</span>
          <span className="text-[12px] text-slate-400">Members</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </li>
        <li className="flex items-center p-4 gap-x-3 border-2 border-slate-100 rounded-lg">
          <span className="text-lg font-bold text-slate-800">2</span>
          <span className="text-[12px] text-slate-400">
            Limited access members
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </li>
        <li className="flex items-center p-4 gap-x-3 border-2 border-slate-100 rounded-lg">
          <span className="text-lg font-bold text-slate-800">1</span>
          <span className="text-[12px] text-slate-400">Admin</span>
        </li>
        <li className="flex items-center p-4 gap-x-3 border-2 border-slate-100 rounded-lg">
          <span className="text-lg font-bold text-slate-800">5</span>
          <span className="text-[12px] text-slate-400">Members</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <div className="flex transform -translate-x-1 items-center flex-wrap">
            <img
              src="https://source.unsplash.com/random/?nature"
              alt="icon"
              className="w-6 h-6 rounded-full border border-white ml-auto"
            />
            <span className="text-[12px] border border-slate-300 rounded-full p-2 py-0.5">
              L
            </span>
            <img
              src="https://source.unsplash.com/random/?machines"
              alt="icon"
              className="w-6 h-6 rounded-full border border-white ml-auto"
            />
            <img
              src="https://source.unsplash.com/random/?robots"
              alt="icon"
              className="w-6 h-6 rounded-full border border-white ml-auto"
            />
            <span className="text-[12px] border border-slate-300 rounded-full p-2 py-0.5">
              O
            </span>
          </div>
        </li>
        <li className="flex items-center p-4 gap-x-3 border-2 border-slate-100 rounded-lg">
          <span className="text-lg font-bold text-slate-800">2</span>
          <span className="text-[12px] text-slate-400">
            Limited access members
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Utils;
