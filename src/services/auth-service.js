import {
  auth,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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
