import { collection, addDoc, getDocs  } from "firebase/firestore"; 
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "./firebaseSetup";

export const AddDocument = async (users, data) => {
  const docRef = await addDoc(collection(db, users), data);
  return docRef;
}

export const GetAllDocuments = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

export const GetDocumentByField = async (collection, field, value) => {
  const firestore = getFirestore();
  const collectionRef = doc(firestore, collection);

  try {
    const querySnapshot = await getDoc(collectionRef, field, "==", value);
    return querySnapshot;
  } catch (error) {
    throw error;
  }
};

// Função para atualizar um documento
export const UpdateDocument = async (collection, docId, data) => {
  const firestore = getFirestore();
  const docRef = doc(firestore, collection, docId);

  try {
    await updateDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};

export const GetDocument = async (collection, docId) => {
  try {
    const docRef = db.collection(collection).doc(docId);
    const documentSnapshot = await docRef.get();
    return documentSnapshot;
  } catch (error) {
    console.error("Erro ao obter documento:", error);
    throw error;
  }
};

export const GetDocumentById = async (collection, docId) => {
  const docRef = doc(db, collection, docId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
