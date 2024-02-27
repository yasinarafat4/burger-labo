
import { ObjectId } from "mongodb";
import "server-only";
import DbConnect from "./DbConnect";


export const getBurgersFromDb = async (categoryId) => {
  const db = await DbConnect();
  const burgersCollection = db?.collection("burgers");
  const query = {};
  if (categoryId) {
    query.categoryId = categoryId;
  }
  return burgersCollection.find(query).toArray();
};

export const getBurgerByIdFromDb = async (id) => {
  const db = await DbConnect();
  const burgersCollection = db?.collection("burgers");
  const query = {
    _id: new ObjectId(id),
  };
  return burgersCollection.findOne(query);
};

export const getBurgersByIdsFromDb = async (ids = []) => {
  const db = await DbConnect();
  const burgersCollection = db?.collection("burgers");
  const idsWithObjectId = ids.map((id) => new ObjectId(id));
  const query = {
    _id: { $in: idsWithObjectId },
  };
  return burgersCollection.find(query).toArray();
};