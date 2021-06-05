import React, {ReactNode} from 'react';

export default function BasicLayout({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-initial bg-red-500">
        Header
      </div>
      <div className="flex-auto bg-red-100">
        {children}
      </div>
    </div>
  )
}
