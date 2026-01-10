import { UserRole } from "@/app/types/model";

export type MenuItem = {
  label: string;
  href: string;
  roles?: UserRole[];
};


export const MENU: MenuItem[] = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Tin tức - Sự kiện", href: "/tin-tuc-su-kien" },
  { label: "Hoạt động", href: "/hoat-dong" },
  { label: "Văn hóa", href: "/van-hoa" },
  { label: "Thông báo", href: "/thong-bao" },
  { label: "Tra cứu", href: "/tra-cuu", roles: ["ADMIN", "EDITOR", "USER"]},
  { label: "Quản lý user", href: "/admin/user", roles: ["ADMIN"] },
  { label: "Quản lý bài viết", href: "/admin/bai-viet", roles: ["ADMIN", "EDITOR"] },
];

export function filterMenuByRole(menu: MenuItem[], role?: UserRole) {
  return menu.filter((item) => {
    if (!item.roles) return true;
    if (!role) return false;
    return item.roles.includes(role);
  });
}
