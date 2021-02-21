import React from "react";

export default function Dashboard() {
  return (
    <>
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="px-10 py-2 mt-1">
          <span className="text-gray-500 font-semibold">Today</span>
        </div>
        {/* today tab 1 */}
        <div className="container mx-auto w-full px-6 -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            {/* Card */}
            <div className="flex justify-center">
              {/* Left side */}
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <div className="px-2 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">brian</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">
                  23 THREADS
                </span>
              </div>
            </div>
            <div className="flex pr-8">
              {/* Rigt side */}
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <span className="mt-2 bg-red-100 text-semibold text-red-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>
              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                  "
              >
                <div>
                  <span className="mt-2 flex">
                    <img
                      className="inline-block h-8 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* taday tab 2 */}
        <div className="container mx-auto w-full px-6 -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            {/* Card */}
            <div className="flex justify-center">
              {/* Left side */}
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Tom cook</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">
                  1 THREAD
                </span>
              </div>
            </div>
            <div className="flex pr-8">
              {/* Rigt side */}
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <span className="mt-2 bg-red-100 text-semibold text-red-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>
              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                  "
              >
                <div>
                  <span className="mt-2 flex">
                    <img
                      className="inline-block h-8 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end of today tab 2 */}
        {/* today tab 3 */}
        {/* end of today tab 3 */}
        {/* yestarday tab 1 */}
        <div className="px-10 py-2 mt-6">
          <span className="text-gray-500 font-semibold">Yesterday</span>
        </div>
        {/* today tab 1 */}
        <div className="container mx-auto w-full px-6 -mb-2 ">
          <div
            className="mt-1 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            {/* Card */}
            <div className="flex justify-center">
              {/* Left side */}
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pravatar.cc/30?2"
                alt=""
              />
              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Nickolas</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">
                  3 THREADS
                </span>
              </div>
            </div>
            <div className="flex pr-8">
              {/* Rigt side */}
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <span className="mt-2 bg-red-100 text-semibold text-red-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>
              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                  "
              >
                <div>
                  <span className="mt-2 flex">
                    <img
                      className="inline-block h-8 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end of yesterday tab 1 */}
        {/* start of yesterday tab 2*/}
        <div className="container mx-auto w-full px-6 -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            {/* Card */}
            <div className="flex justify-center">
              {/* Left side */}
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pravatar.cc/30?3"
                alt=""
              />
              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Nickolas</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">
                  3 THREADS
                </span>
              </div>
            </div>
            <div className="flex pr-8">
              {/* Rigt side */}
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <span className="mt-2 bg-red-100 text-semibold text-red-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>
              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                  "
              >
                <div>
                  <span className="mt-2 flex">
                    <img
                      className="inline-block h-8 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end of yesterday tab 2*/}
        <div className="px-10 py-2 mt-6">
          <span className="text-gray-500 font-semibold">27 MAR</span>
        </div>
        {/* 27 mar tab 1 */}
        {/* end 27 mar tab 1 */}
        {/* start of 27 mar tab 2 */}
        <div className="container mx-auto w-full px-6 -mb-2 ">
          <div
            className="mt-4 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
          >
            {/* Card */}
            <div className="flex justify-center">
              {/* Left side */}
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pravatar.cc/30?4"
                alt=""
              />
              <div className="px-4 flex flex-col capitalize text-gray-600">
                <span className="font-bold text-md">Kenny</span>
                <span className="mt-1 text-gray-400 text-sm font-semibold">
                  2 THREADS
                </span>
              </div>
            </div>
            <div className="flex pr-8">
              {/* Rigt side */}
              <div
                className="ml-16 pl-4 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <span className="mt-2 bg-red-100 text-semibold text-red-400 px-4 py-1 rounded text-black dark:text-gray-200">
                  New
                </span>
              </div>
              <div
                className="ml-4 pt-2 flex flex-col capitalize text-gray-600
                  "
              >
                <div>
                  <span className="mt-2 flex">
                    <img
                      className="inline-block h-8 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div
                className="ml-16 pt-3 flex flex-col capitalize text-gray-600
                  dark:text-gray-400"
              >
                <p>
                  <span className="font-bold">New Chili piper license - </span>
                  Hey Schott, have you lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* end of 27 mar tab 2 */}
      </main>
    </>
  );
}
