import React from "react";
import { ListItem } from "../../index";

interface ListItemProps {
  item: ListItem;
}

export default function ListItemComponent({ item }: ListItemProps) {
  console.debug(item);

  return (
    <>
      <div
        className="container mx-auto w-full px-6 -mb-2"
        onClick={() => window.open(item.url, "_blank")}
      >
        <div
          className="mt-4 flex px-4 py-4 justify-between bg-white
          dark:bg-gray-600 shadow-sm rounded-lg cursor-pointer"
        >
          <div className="flex justify-center">
            <img className="h-24 w-24 object-cover" src={item.cover} alt="" />
            <div className="px-2 flex flex-col capitalize text-gray-600">
              <span className="font-bold text-md">{item.title}</span>
              <span className="mt-1 text-gray-400 text-sm font-semibold">
                {item.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
