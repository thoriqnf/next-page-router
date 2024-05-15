import RootLayout from "@/components/Layout";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  console.log(router.query.q);
  return (
    <div>
      <RootLayout>
        <h1>index halaman blog</h1>
      </RootLayout>
    </div>
  );
}

export default index;

// localhost:3000/blog
