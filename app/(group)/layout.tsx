import SideLink from "@/components/SideLink";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex flex-col">
      <header
        className="h-12 text-lg
       text-white bg-[#0052CC] 
       border-b-[1px]
       border-[#0747A6]
       flex justify-center items-center"
      >
        سامانه تبادل دارایی های دیجیتال - رمز ارزها
      </header>
      <div className="flex flex-1">
        <div className="border-l-[1px] boder-[#ccc]  bg-[#f1f1f1] w-[350px]">
          <ul className="">
            <SideLink href={"/mrypto"} text={"مشتریان"} />
            <SideLink href={"/crypto"} text={"کیف پول"} />
            <SideLink href={"/mrypto"} text={"کاربران"} />
            <SideLink href={"/mrypto"} text={"نقش ها"} />
            <SideLink href={"/mrypto"} text={"سطح دسترسی"} />
            <SideLink href={"/mrypto"} text={"گزارشات"} />
          </ul>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
