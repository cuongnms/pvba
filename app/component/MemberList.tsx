import Image from "next/image";

export default function MemberList() {
  return (
    <div className="max-sm:max-w-640 rounded-[32px] bg-gray-50 p-6">
      
      <div className="space-y-4">
        {[
          {
            img: "/img/news/new-1.jpg",
            name: "Nguyen Van A",
            title: "Chủ tịch hội Doanh nhân trẻ",
          },
          {
            img: "/img/news/new-1.jpg",
            name: "Nguyen Van A",
            title: "Phó chủ tịch hội Doanh nhân trẻ",
          },
          {
            img: "/img/news/new-1.jpg",
            name: "Nguyen Van A",
            title: "Thành viên thường trực",
          },
          {
            img: "/img/news/new-1.jpg",
            name: "Nguyen Van A",
            title: "Hội viên",
          },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="relative w-30 h-30 rounded-full overflow-hidden shrink-0">
              <Image src={item.img} alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  font-bold text-gray-800 leading-snug">
                {item.name}
              </p>
              <p className="text-sm text-gray-800 leading-snug">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
