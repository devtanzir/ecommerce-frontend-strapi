import { createId } from "@/lib/utils/utils";

export const NavItem = [
  {
    id: createId(),
    title: "Home",
    path: "/",
  },
  { id: createId(), title: "About", path: "/about" },
  { id: createId(), title: "Products", path: "/products" },
  { id: createId(), title: "Contact Us", path: "/contact" },
  { id: createId(), title: "Account", path: "/account" },
];
