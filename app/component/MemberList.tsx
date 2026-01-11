import Image from "next/image";

export default function MemberList() {
  return (
    <div className="max-w-sm rounded-[32px] bg-gray-50 p-6">
      {/* Header */}
      {/* <div className="flex items-center gap-3 mb-6">
        <span className="w-[3px] h-6 bg-red-600 rounded-full" />
        <h2 className="text-xl font-bold">Viettel Vibes Podcast</h2>
      </div> */}

      {/* Featured podcast */}
      {/* <div className="flex flex-col items-center text-center mb-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src="/img/podcast/featured.jpg"
            alt="featured podcast"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-semibold text-gray-900">
          Tại Viettel: 1 + 1 lớn hơn 2
        </p>
      </div>

      <hr className="my-6 border-gray-200" /> */}

      {/* Podcast list */}
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
