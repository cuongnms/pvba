import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";
import { User, UserRole } from "../types/model";

async function getUsersCollection() {
  const client = await clientPromise;
  return client.db("mydb").collection<User>("users");
}

export async function createUser(
  data: Omit<User, "_id" | "createdAt" | "updatedAt">
) {
  const users = await getUsersCollection();

  const user: User = {
    ...data,
    createdAt: new Date(),
  };

  const result = await users.insertOne(user);
  return result.insertedId;
}

export async function findUserByEmail(email: string) {
  const users = await getUsersCollection();
  return users.findOne({ email });
}

export async function findUserByUsername(username: string) {
  const users = await getUsersCollection();
  return users.findOne({ username });
}

export async function findUserById(id: string) {
  const users = await getUsersCollection();
  return users.findOne({ _id: new ObjectId(id) });
}

export async function updateUser(
  userId: string,
  data: Partial<Pick<User, "email" | "firstName" | "lastName">>
) {
  const users = await getUsersCollection();

  return users.updateOne(
    { _id: new ObjectId(userId) },
    {
      $set: {
        ...data,
        updatedAt: new Date(),
      },
    }
  );
}

