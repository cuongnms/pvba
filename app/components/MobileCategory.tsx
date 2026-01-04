"use client";
import { X, ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";

export default function MobileCategoryDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState<string | null>("Kinh doanh");

  const toggle = (key: string) => setActive(active === key ? null : key);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-transform duration-300 bg-white
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Header */}
      <div className="flex justify-end items-center h-12 px-4 border-b">
        <button onClick={onClose}>
          <X size={22} />
        </button>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-3rem)] overflow-y-auto px-4 pb-6">
        {/* Search */}
        <div className="relative mt-4">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Tìm kiếm"
            className="w-full pl-10 pr-3 py-2 rounded-lg border text-sm"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-between mt-4 text-sm font-medium border-b">
          <button className="pb-2 border-b-2 border-black">
            Xem theo đơn vị
          </button>
          <button className="pb-2 text-gray-400">Mới nhất</button>
        </div>

        <div className="mt-4 text-sm text-gray-500">Tất cả chuyên mục</div>

        {/* Accordions */}
        <Accordion title="Nhịp sống" />

        <Accordion
          title="Kinh doanh"
          open={active === "Kinh doanh"}
          onClick={() => toggle("Kinh doanh")}
        >
          <Item label="Viễn thông trong nước" />
          <Item label="Viễn thông nước ngoài" />
          <Item label="Dịch vụ số" />
          <Item label="Giải pháp số" />
          <Item label="Công nghiệp công nghệ cao" />
          <Item label="Thương mại & Logistics" />
          <Item label="Lĩnh vực khác" />
        </Accordion>

        <Accordion title="Công nghệ" />
        <Accordion title="Tri thức" />
        <Accordion title="Văn hóa Viettel" />
        <Accordion title="Vì Viettel tốt lên" />
      </div>
    </div>
  );
}

function Accordion({ title, open, onClick, children }: any) {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-3 font-medium"
      >
        {title}
        {children ? open ? <ChevronUp /> : <ChevronDown /> : null}
      </button>

      {open && (
        <div className="pl-4 pb-2 space-y-2 text-gray-600">{children}</div>
      )}
    </div>
  );
}

function Item({ label }: { label: string }) {
  return <div className="py-1">{label}</div>;
}
