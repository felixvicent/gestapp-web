import { Menu, MenuProps } from "antd";
import { BiCategoryAlt, BiTransfer } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"];

export function MainMenu() {
  const pathname = usePathname();

  const { push } = useRouter();

  const ITEMS: MenuItem = [
    {
      label: "Dashboard",
      key: "/",
      icon: <AiOutlineDashboard />,
      onClick: () => push("/"),
    },
    {
      label: "Transações",
      key: "/transactions",
      icon: <BiTransfer />,
      onClick: () => push("/transactions"),
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
