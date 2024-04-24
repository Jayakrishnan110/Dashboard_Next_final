import React from "react";

const Create_role = () => {
  return (
    <div className="w-1/3 border-2 h-fit border-slate-100 rounded-lg p-4">
      <span className="text-[14px] text-slate-700 font-semibold">
        Create Role
      </span>
      <hr />
      <table className="flex w-full justify-between items-center flex-col gap-3 my-5">
        <tr className="w-full flex justify-between items-center">
          <td>
            <span className="text-[12px] text-slate-600">Role Name</span>
          </td>
          <td>
            <input
              type="text"
              className="border-2 border-slate-100 p-1 rounded-lg w-[300px] outline-none text-[12px] text-slate-700"
              placeholder="James Davidson"
            />
          </td>
        </tr>
        <tr className="w-full flex justify-between items-center">
          <td>
            <span className="text-[12px] text-slate-600">Profile Image</span>
          </td>
          <td className="flex justify-start items-center gap-3 w-[300px]">
            <div className="flex items-center justify-start border-2 border-slate-500 drop-shadow-xl rounded-full opacity-20 p-4 w-14 h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <div className="flex gap-2 items-center">
              <button className="text-[12px] text-white bg-black p-2 rounded-lg flex justify-center items-center gap-2 text-sm">
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
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload photo
              </button>
              <button className="text-[12px] text-red-400 bg-white p-2 rounded-lg text-sm">
                Delete
              </button>
            </div>
          </td>
        </tr>
        <tr className="w-full flex justify-between items-center">
          <td>
            <span className="text-[12px] text-slate-600">Modules</span>
          </td>
          <td className="relative flex flex-wrap">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="w-[300px] border-2 border-slate-100 resize-none rounded-lg p-1 outline-none text-[12px] text-slate-700 relative"
              readOnly
            ></textarea>
            <ul className="flex flex-wrap flex-col md:flex-row gap-x-3 gap-y-2 absolute left-2 top-5">
              <a
                className="text-[12px] text-slate-600 border-2 border-slate-300 p-1.5 rounded-xl flex justify-center items-center gap-2"
                href="#"
              >
                Module 1
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </a>
              <a
                className="text-[12px] text-slate-600 border-2 border-slate-300 p-1.5 rounded-xl flex justify-center items-center gap-2"
                href="#"
              >
                Module 2
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </a>
              <a
                className="text-[12px] text-slate-600 border-2 border-slate-300 p-1 rounded-xl flex justify-center items-center gap-2"
                href="#"
              >
                Module 3
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </a>
              <a
                className="text-[12px] text-slate-600 border-2 border-slate-300 p-1 rounded-xl flex justify-center items-center gap-2"
                href="#"
              >
                Module 4
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </a>
              <a
                className="text-[12px] text-slate-600 border-2 border-slate-300 p-1 rounded-xl flex justify-center items-center gap-2"
                href="#"
              >
                Module 5
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </a>
            </ul>
          </td>
        </tr>
        <tr className="flex justify-end items-center w-full gap-5">
          <td>
            <button className="text-[12px] text-slate-700 font-bold border-2 border-slate-100 p-1 rounded-lg">
              Cancel
            </button>
          </td>
          <td>
            <button className="text-[12px] bg-black font-bold border-2 text-white border-slate-100 p-1 px-2 rounded-lg">
              Add Role
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Create_role;
