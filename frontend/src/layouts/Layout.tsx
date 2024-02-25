import Header from "@/components/Header";
import React from "react";

type Props = {
    children:React.ReactNode;
};

const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="container max-auto py-10">{children}</div>
    </div>
  )
}

export default Layout
