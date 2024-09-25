"use client";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./breadcrumbs";

const BreadCrumbComponents = () => {
  const path = usePathname();
  const Path = path.split("/").filter((item) => item !== "");
  let collectivePath = "";

  return (
    <>
      <div className="px-4 bg-[#E6FBFF] py-5">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2">
          <Breadcrumbs text={"Home"} icon home href="/" />
          {Path.map((item, index) => {
            collectivePath += `/${item}`;
            return (
            <Breadcrumbs
             key={index}
              text={item}
              href={collectivePath}
              current={index == Path.length - 1}
              icon={index !== Path.length - 1}
            />
          )})}
        </div>
      </div>
    </>
  );
};

export default BreadCrumbComponents;
