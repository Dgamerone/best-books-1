import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  limit,
  orderBy,
  writeBatch,
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

// export async function getItems() {
//   const booksCollection = collection(db, "books");

//   const q = query(
//     booksCollection,
//     orderBy("index"),
//     limit(10)
//     );

//   const querySnapshot = await getDocs(q);

//   const dataDocs = querySnapshot.docs.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));
//   return dataDocs;
// }

export function getItemsPromise() {
  return new Promise((resolve, reject) => {
    const booksCollectionRef = collection(db, "books");
    const q = query(booksCollectionRef, orderBy("index"), limit(10));

    getDocs(q).then((querySnapshot) => {
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
  // console.log(dataDocs);
}

export async function createBuyOrder(order) {
  const ordersCollection = collection(db, "orders");

  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id;
}



export async function exportDataWithBatch() {
  const booksCollectionRef = collection(db, "books");
  const batch = writeBatch(db);

  const books = [
    {
      id: "1",
      title: "El Viejo y El Mar",
      author: "Ernest Hemingway",
      year: 1999,
      category: "Clásico",
      price: 6000,
      stock: 10,
      imgUrl: "../images/el-viejo-y-el-mar.jpg",
      resumen:
        "Santiago es un viejo pescador cubano que ya lleva ochenta y cuatro días sin coger un solo pescado. Sólo tiene un amigo, el joven Manolin su aprendiz, a quien sus padres sin embargo fuerzan a que dejen de ir con el viejo Santiago porque dicen: ya no tiene suerte.Sin embargo Manolin sigue ayudando a su amigo Santiago todos los días cuando llega de su infructuosa pesca.En el día que hace ochenta y cinco Santiago sale con su pequeño esquife y se adentra en el mar, alejándose de las aguas costeras.",
    },
    {
      id: "2",
      title: "El Nombre de la Rosa",
      author: "Umberto Eco",
      year: 2001,
      category: "Suspenso",
      price: 4500,
      stock: 10,
      imgUrl: "../images/en-el-nombre-de-la-rosa.jpg",
      resumen:
        "La novela emblemática de Umberto Eco ahora en audiolibro Valiéndose de las características propias de la novela gótica, la crónica medieval y la novela policíaca, El nombre de la rosa narra las actividades detectivescas de Guillermo de Baskerville para esclarecer los crímenes cometidos en una abadía benedictina en el año 1327. Le ayudará en su labor el novicio Adso, un hombre joven que se enfrenta por primera vez a las realidades de la vida, más allá de las puertas del convento.",
    },

    {
      id: "3",
      title: "El Arte De La Guerra",
      author: "Sun Tzu",
      year: 1990,
      category: "Estratégia",
      price: 2700,
      stock: 12,
      imgUrl: "../images/el-arte-de-la-guerra.jpg",
      resumen:
        "En El arte de la guerra, Sun Tzu hace análisis detallados y recomendaciones útiles sobre trece temas principales de la estrategia militar: la planeación, el reto, el ataque, el posicionamiento, la dirección, fuerzas y debilidades, las maniobras, la implementación de las tácticas, el avance, el terreno, las fases de una campaña, las armas y el uso de información.",
    },

    {
      id: "4",
      title: "El Alquimista",
      author: "Paulo Coelho",
      year: 2002,
      category: "Clásico",
      price: 4100,
      stock: 12,
      imgUrl: "../images/el-alquimista.jpg",
      resumen:
        "Poderosa, sencilla, sabia e inspiradora, ésta es la historia de Santiago, un joven pastor andaluz que viaja desde su tierra natal hacia el desierto egipcio en busca de un tesoro oculto en las pirámides. Nadie sabe lo que contiene el tesoro, ni si Santiago será capaz de superar los obstáculos del camino. Pero lo que comienza como un viaje en busca de riquezas se convierte en un descubrimiento del tesoro interior.",
    },

    {
      id: "5",
      title: "El Psicoanalista",
      author: "John Katzenbach",
      year: 2015,
      category: "Suspenso",
      price: 7100,
      stock: 12,
      imgUrl: "../images/el-psicoanalista.jpg",
      resumen:
        "Feliz aniversario, doctor. Bienvenido al primer día de su muerte. Así comienza el anónimo que recibe el psicoanalista Frederick Starks.",
    },

    {
      id: "6",
      title: "Cuento de Hadas",
      author: "Stephen King",
      year: 2002,
      category: "Terror",
      price: 4100,
      stock: 8,
      imgUrl: "../images/cuento-de-hada.jpg",
      resumen:
        "Charlie Reade parece un estudiante de instituto normal y corriente, pero carga con un gran peso sobre los hombros.",
    },
  ];

  for (let item of books) {
    item.index = item.id;
    delete item.id;
    const newDoc = doc(booksCollectionRef)
    batch.set(newDoc, item)
  }
  const commitDone = await batch.commit();
  console.log("--->", commitDone)
  
}
