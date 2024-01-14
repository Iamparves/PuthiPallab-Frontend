import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebaseSetup";

export const AddDocument = async (users, data) => {
  const docRef = await addDoc(collection(db, users), data);
  return docRef;
}