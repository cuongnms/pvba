const pvba = db.getSiblingDB("pvba");

// users
pvba.createCollection("users");
pvba.users.createIndex({ userId: 1 }, { unique: true });
pvba.users.createIndex({ email: 1 }, { unique: true });
pvba.users.createIndex({ userName: 1 }, { unique: true });
pvba.users.createIndex({ role: 1 });

// articles
pvba.createCollection("articles");
pvba.articles.createIndex({ slug: 1 }, { unique: true });
pvba.articles.createIndex({ category: 1, createdAt: -1 });
pvba.articles.createIndex({ authorId: 1 });

// admin user
const admin = pvba.users.findOne({ userName: "admin" });

if (!admin) {
  pvba.users.insertOne({
    userId: "admin-uuid-1234",
    userName: "admin",
    email: "admin@example.com",
    password: "$2b$10$Po60eCrgRvItHb.glzJ/1esxcZEiGkH/LO8elnlO5G6F/XGQABxLO",
    role: "ADMIN",
    createdAt: new Date(),
  });
  print("Default admin user created");
} else {
  print("Admin user already exists");
}



// const now = new Date();

// const articles = [
//   {
//     title: "Doanh nhân trẻ và hành trình khởi nghiệp thời 4.0",
//     slug: "doanh-nhan-tre-va-hanh-trinh-khoi-nghiep-4-0",
//     summary: "Câu chuyện truyền cảm hứng về những doanh nhân trẻ dám nghĩ dám làm trong kỷ nguyên số.",
//     category: "gioi-thieu",
//     htmlContent: `
//       <h2>Khởi nghiệp thời 4.0</h2>
//       <p>Trong thời đại công nghệ phát triển mạnh mẽ, các doanh nhân trẻ có nhiều cơ hội hơn bao giờ hết.</p>
//       <p>Điều quan trọng nhất là tư duy đổi mới và khả năng thích nghi.</p>
//     `,
//     textContent:
//       "Khởi nghiệp thời 4.0. Trong thời đại công nghệ phát triển mạnh mẽ, các doanh nhân trẻ có nhiều cơ hội hơn bao giờ hết. Điều quan trọng nhất là tư duy đổi mới và khả năng thích nghi.",
//     thumbnail: "https://example.com/thumbnails/startup-4-0.jpg",
//     authorName: "Admin",
//     createdAt: now,
//   },
//   {
//     title: "5 kỹ năng bắt buộc của doanh nhân trẻ",
//     slug: "5-ky-nang-bat-buoc-cua-doanh-nhan-tre",
//     summary: "Những kỹ năng cốt lõi giúp doanh nhân trẻ tồn tại và phát triển bền vững.",
//     category: "STARTUP",
//     htmlContent: `
//       <ul>
//         <li>Tư duy chiến lược</li>
//         <li>Quản lý tài chính</li>
//         <li>Kỹ năng lãnh đạo</li>
//         <li>Giao tiếp & đàm phán</li>
//         <li>Học hỏi liên tục</li>
//       </ul>
//     `,
//     textContent:
//       "5 kỹ năng bắt buộc của doanh nhân trẻ: tư duy chiến lược, quản lý tài chính, kỹ năng lãnh đạo, giao tiếp & đàm phán, học hỏi liên tục.",
//     thumbnail: "https://example.com/thumbnails/skills.jpg",
//     authorName: "Admin",
//     createdAt: now,
//   },
//   {
//     title: "Công nghệ ảnh hưởng thế nào đến startup hiện đại?",
//     slug: "cong-nghe-anh-huong-den-startup-hien-dai",
//     summary: "AI, Cloud và Big Data đang thay đổi cách startup vận hành như thế nào?",
//     category: "TECH",
//     htmlContent: `
//       <p>AI và Cloud giúp startup tối ưu chi phí và mở rộng quy mô nhanh chóng.</p>
//       <p>Big Data hỗ trợ việc ra quyết định chính xác hơn.</p>
//     `,
//     textContent:
//       "AI, Cloud và Big Data đang thay đổi cách startup vận hành. Công nghệ giúp tối ưu chi phí và mở rộng quy mô nhanh chóng.",
//     thumbnail: "https://example.com/thumbnails/tech-startup.jpg",
//     authorName: "Admin",
//     createdAt: now,
//   },
// ];

// // insert if not exists
// articles.forEach(article => {
//   const exists = pvba.articles.findOne({ slug: article.slug });
//   if (!exists) {
//     pvba.articles.insertOne(article);
//     print(`Inserted article: ${article.slug}`);
//   } else {
//     print(`Article already exists: ${article.slug}`);
//   }
// });