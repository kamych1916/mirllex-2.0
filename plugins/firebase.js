import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNq9OTjpWegAAszGnrd3MJsHGnLryp0Pc",
    authDomain: "mirllex.firebaseapp.com",
    projectId: "mirllex",
    storageBucket: "mirllex.appspot.com",
    messagingSenderId: "817859944054",
    appId: "1:817859944054:web:011f26730353ebf2744957",
    measurementId: "G-BQZYVSTEG2"
  };

// let firebaseApp = null;
let db = null;
if (!firebase.apps.length) {
  // firebaseApp = firebase.initializeApp(firebaseConfig);
  db = firebase
    .initializeApp(firebaseConfig)
    .firestore()
    .collection("blog");
}

export const auth = firebase.auth();

// export const createProducts = (categorie, product) => {
//   return db.doc(categorie).update(product);
// };

// export const createCategorie = categorie => {
//   db.doc(categorie).set({});
// };

// export const getProducts = async id => {
//   const med = await db.doc(id).get();
//   return med.exists ? med.data() : null;
// };

// export const getCategories = () => {
//   let categs = [];
//   db.get()
//     .then(querySnapshot => {
//       querySnapshot.forEach(doc => {
//         categs.push(doc.id);
//       });
//     })
//     .catch(error => alert("🤕" + error));
//   return categs;
// };

// export const updateMeds = (id, med) => {
//   return db.doc(id).update(med);
// };

// export const deleteMeds = id => {
//   return db.doc(id).delete();
// };

// export const useLoadMeds = () => {
//   const meds = ref([]);
//   const close = usersCollection.onSnapshot(snapshot => {
//     meds.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return meds;
// };
