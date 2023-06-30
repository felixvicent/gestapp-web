import { Menu, MenuProps } from "antd";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"];

export function MainMenu() {
  const pathname = usePathname();

  console.log(pathname);

  const { push } = useRouter();

  const ITEMS: MenuItem = [
    {
      label: "Dashboard",
      key: "/",
      icon: <AiOutlineDashboard />,
      onClick: () => push("/"),
    },
    {
      label: "Categorias",
      key: "/categories",
      icon: <BiCategoryAlt />,
      onClick: () => push("/categories"),
    },
  ];
  return <Menu theme="dark" defaultSelectedKeys={[pathname]} items={ITEMS} />;
}
