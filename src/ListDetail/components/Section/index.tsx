import React, { ReactChild } from "react";

interface SectionProps {
  title: string;
  children: ReactChild;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <>
      <div className="px-10 py-2 mt-1">
        <span className="text-gray-500 font-semibold">{title}</span>
      </div>
        {children}
    </>
  );
}
