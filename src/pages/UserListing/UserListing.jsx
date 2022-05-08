import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { UserCard } from "../../components";
import { db } from "../../firebase/firebase.config";
import "./userListing.css";

function UserListing({ search, setSearch }) {
  const [userList, setUserList] = useState([]);
  const [allUserList, setAllUserList] = useState([]);

  console.log(search);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const newUsers = [];
      querySnapshot.forEach((doc) => newUsers.push(doc.data()));
      setUserList(newUsers);
      setAllUserList(newUsers);
      if (search)
        setUserList((prev) =>
          prev.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase()),
          ),
        );
      else setUserList(allUserList);
    })();
  }, []);
  useEffect(() => {
    if (search)
      setUserList((prev) =>
        prev.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    else setUserList(allUserList);
  }, [search]);

  return (
    <div className="userListing">
      <div className="underline flex justify-end m-2">
        <p
          className="cursor-pointer mr-10"
          onClick={() => {
            setUserList(allUserList);
            setSearch("");
          }}
        >
          Clear Filter
        </p>
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
