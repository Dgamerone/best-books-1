import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
  console.log("Conectandonos a firestore", app);
}

export function getSingleItem(id){
  const docRef = doc(db, "products", "azqOjc1CJyf26rVow3OV" );
  getDoc(docRef).then(snapshot=> {

  }) 
}
