import Link from "next/link";

const SideLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href}>
      <li
        className="hover:bg-[#f9f9f9] 
      border-b-[1px] border-[#ccc]  pr-16 h-10 flex items-center justify-start"
      >
        {text}
      </li>
    </Link>
  );
};

export default SideLink;
