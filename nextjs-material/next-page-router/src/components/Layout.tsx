import React, { ReactNode } from "react";
import Link from "next/link";

type childrenType = {
  children: ReactNode;
};

function RootLayout({ children }: childrenType) {
  return (
    <>
      <div>
        <h1>header</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>

      {children}
      <h1>footer</h1>
    </>
  );
}

export default RootLayout;
