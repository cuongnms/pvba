import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongodb";
import { User, UserUpdateInput } from "../types/model";
import { mapperUser, toUser } from "../types/mapper/mapper";

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

export async function findUserByEmail(email: string): Promise<User | null> {
  const users = await getUsersCollection();
  const doc = await users.findOne({ email });
  if (!doc) return null;

  const { _id, ...user } = doc;
  return user;
}

export async function findUserByUsername(userName: string) {
  const users = await getUsersCollection();
  const doc = await users.findOne({ userName });
  if (!doc) return null;

  const { _id, ...user } = doc;
  return user;
}

export async function updateUser(
  username: string,
  data: UserUpdateInput
) {
  const users = await getUsersCollection();
  const updateData: UserUpdateInput = {};

  if (data.firstName !== undefined) updateData.firstName = data.firstName;

  if (data.lastName !== undefined) updateData.lastName = data.lastName;

  if (data.phoneNumber !== undefined) updateData.phoneNumber = data.phoneNumber;
  return users.updateOne(
    { userName: username },
    {
      $set: {
        ...updateData,
        updatedAt: new Date(),
      },
    }
  );
}
