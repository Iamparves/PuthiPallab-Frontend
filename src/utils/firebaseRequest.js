import { collection, addDoc, getDocs  } from "firebase/firestore"; 
import { db } from "./firebaseSetup";

export const AddDocument = async (users, data) => {
  const docRef = await addDoc(collection(db, users), data);
  return docRef;
}

export const GetAllDocuments = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}