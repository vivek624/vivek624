"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Studentlogin = () => {
  const router = useRouter();
  // const navigate = (page) => {
  //   router.push(page);
  // };

  return (
    <div>
      <h3>student login</h3>
      <Link href="/login">go to login page</Link>
      <br />
      <button onClick={() => router.push("studentlogin/login")}>Login page</button>
    </div>
  );
};
export default Studentlogin;
