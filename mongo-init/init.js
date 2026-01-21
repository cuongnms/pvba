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
