import { UserRole } from "@/app/types/model";

export type MenuItem = {
  label: string;
  href: string;
  roles?: UserRole[]; // undefined = public
};

// "Giới thiệu",
//   "Tin tức",
//   "Hoạt động",
//   "Văn hóa",
//   "Thông báo",

export const MENU: MenuItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Hoạt động", href: "/hoat-dong" },
  { label: "Văn hóa", href: "/van-hoa" },
  { label: "Thông báo", href: "/thong-bao" },
  { label: "Quản lý user", href: "/user", roles: ["ADMIN"] },
  { label: "Quản lý bài viết", href: "/bai-viet", roles: ["ADMIN", "EDITOR"] },
];

export function filterMenuByRole(menu: MenuItem[], role?: UserRole) {
  return menu.filter((item) => {
    if (!item.roles) return true;
    if (!role) return false;
    return item.roles.includes(role);
  });
}
