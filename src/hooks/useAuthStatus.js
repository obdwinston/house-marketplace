import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    console.log("from useAuthStatus main start:", loggedIn, checkingStatus);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });

    console.log("from useAuthStatus main end:", loggedIn, checkingStatus);

    return () => {
      console.log("from useAuthStatus return:", loggedIn, checkingStatus);
    };
  });

  return { loggedIn, checkingStatus };
};

export default useAuthStatus;
