import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsRK3MmUciNmVrgY4b05Pc8W4kgQbfS88",
  authDomain: "best-books-4fcbe.firebaseapp.com",
  projectId: "best-books-4fcbe",
  storageBucket: "best-books-4fcbe.appspot.com",
  messagingSenderId: "57076603385",
  appId: "1:57076603385:web:480e2e47ca1938bb24c528",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp() {
  console.log("Conectandonos a firestore", db);
}

// Obtener un producto
export async function getSingleItem(itemid) {
  const docRef = doc(db, "books", itemid);
  const snapshot = await getDoc(docRef);

  // return {...snapshot.data(), id: snapshot.id}

  const docData = snapshot.data();
  docData.id = snapshot.id;
  return docData;
}

// Obtener todos los productos ILC

export async function getItems() {
  const booksCollection = collection(db, "books");
  const querySnapshot = await getDocs(booksCollection);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataDocs;
}

export function getItemsPromise() {
  return new Promise((resolve, reject) => {
    const booksCollectionRef = collection(db, "books");
    getDocs(booksCollectionRef).then((querySnapshot) => {
      const dataDocs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      resolve(dataDocs);
    });
  });
}

// Obtener productos segun su categoria

export async function getItemsByCategory(categoryid) {
  const booksCollectionRef = collection(db, "books");

  const q = query(booksCollectionRef, where("category", "==", categoryid));
  const querySnapshot = await getDocs(q);

  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  console.log(dataDocs);
}
