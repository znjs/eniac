import {
  auth,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  addDoc,
  collection,
} from "../firebase/firebase.config";

export const logInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  github,
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  console.log(github);
  const user = res.user;
  if (user) {
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      githubId: github,
      linkedIn: "",
      twitter: "",
      portfolio: "",
    });
  }
  return res;
};
