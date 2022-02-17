import React from "react";
import NavBar from "./NavBar";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
