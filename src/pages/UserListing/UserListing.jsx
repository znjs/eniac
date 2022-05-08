import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { UserCard } from "../../components";
import { db } from "../../firebase/firebase.config";
import "./userListing.css";

function UserListing() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const newUsers = [];
      querySnapshot.forEach((doc) => newUsers.push(doc.data()));
      setUserList(newUsers);
    })();
  }, []);

  return (
    <div className="userListing">
      <div className="underline flex justify-end m-2">
        <p className="cursor-pointer mr-10">Clear Filter</p>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {!!userList.length &&
          userList.map((user) => <UserCard user={user} key={user.uid} />)}
        <div className="w-80"></div>
        <div className="w-80"></div>
        <div className="w-80"></div>
        <div className="w-80"></div>
        <div className="w-80"></div>
      </div>
    </div>
  );
}

export { UserListing };
