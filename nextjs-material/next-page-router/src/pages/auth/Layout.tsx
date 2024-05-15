import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type childrenType = {
  children: ReactNode;
};

function AuthLayout({ children }: childrenType) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div>
        <h1>ini layout login</h1>
      </div>
      <ul>
        <li>
          {/* <Link href="/">Home</Link> */}
          <button onClick={() => router.push("/")}>Home</button>
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

export default AuthLayout;
