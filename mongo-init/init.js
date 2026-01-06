// mongo-init/init.js

db = db.getSiblingDB("pvba");

// users
db.createCollection("users");
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex({ role: 1 });

// articles
db.createCollection("articles");
db.articles.createIndex({ slug: 1 }, { unique: true });
db.articles.createIndex({ category: 1, createdAt: -1 });
db.articles.createIndex({ authorId: 1 });

// đảm bảo DB được tạo (fallback)
db._init.insertOne({ createdAt: new Date() });
