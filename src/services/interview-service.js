import { addDoc, doc, updateDoc } from "firebase/firestore";
import { collection, db, getDocs } from "../firebase/firebase.config";
import { v4 as uuid } from "uuid";
export const addAndUpdateSchedule = async (
  userInfo,
  date,
  intervieweeName,
  topics,
  schedule_uid,
  intervieweeEmail,
) => {
  const scheduledRef = collection(db, "scheduleBoard");
  const scheduledData = await getDocs(scheduledRef);
  let tempData = {};

  scheduledData.docs.forEach((doc) => {
    const { uid } = doc.data();
    if (schedule_uid === uid) {
      tempData = {
        docId: doc.id,
        data: doc.data(),
      };
    }
  });
  if (tempData.docId) {
    const scheduledRef = doc(db, "scheduleBoard", tempData.docId);
    await updateDoc(scheduledRef, {
      interviewee: intervieweeName,
      intervieweeEmail,
    });
  } else {
    await addDoc(collection(db, "scheduleBoard"), {
      username: userInfo.name,
      email: userInfo.email,
      date: date,
      interviewee: "",
      intervieweeEmail: "",
      topics: topics,
      uid: uuid(),
    });
  }
};
