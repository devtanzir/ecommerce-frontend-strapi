import Link from "next/link";
import { IoChevronForwardOutline, IoHomeOutline } from "react-icons/io5";

const Breadcrumbs = ({
  text,
  home = false,
  icon = false,
  current = false,
  href,
}: {
  text: string;
  home?: boolean;
  icon?: boolean;
  current?: boolean;
  href: string;
}) => {
  return (
    <div className="flex items-center gap-1 group">
      {home && <IoHomeOutline />}
      {current ? (
        <span className="text-sm font-medium capitalize cursor-text text-gray-400">
          {text}
        </span>
      ) : (
        <Link
          href={href}
          className={`cursor-pointer text-sm font-medium capitalize`}
        >
          {text}
        </Link>
      )}
      {icon && (
        <span className="text-xs transition ease-in-out duration-200 group-hover:animate-horizontal">
          <IoChevronForwardOutline />
        </span>
      )}
    </div>
  );
};

export default Breadcrumbs;
