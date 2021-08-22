import { useEffect, useState } from "react";
import {
  markNotification,
  getNextNotification,
} from "./components/API/NotificationsRequests/NotificationsRequests";
import { createUser } from "./components/API/UserRequests/UserRequests";
import "./App.css";
import Notification from "./components/Notification/Notitification";
import Details from "./components/Details/Details";
import Messages from "./components/Messages/Messages";

function App() {
  const [periodTime, setPeriodTime] = useState(
    Math.floor(Math.random() * (10 - 5 + 1) + 5)
  );
  const [durationTime, setDurationTime] = useState(
    Math.floor(Math.random() * 5 + 1)
  );
  const [durationTimeOut, setDurationTimeOut] = useState(false);
  const [currNotification, setCurrNotification] = useState();
  const [markedNotification, setMarkedNotification] = useState(false);
  const [markedAll, setMarketAll] = useState(false);

  const updateNextNotification = async () => {
    const NextNotification = await getNextNotification(
      currNotification?._id,
      sessionStorage.getItem("userId")
    );
    if (NextNotification[0]) {
      setCurrNotification(NextNotification[0]);
    } else {
      setCurrNotification();
      setMarketAll(true);
    }
  };

  const clickNotificationHandle = async () => {
    setMarkedNotification(true);
    await markNotification(
      currNotification._id,
      sessionStorage.getItem("userId")
    );
    setCurrNotification();
  };

  useEffect(() => {
    sessionStorage.clear();
    const createNewUser = async () => {
      const newUser = await createUser();
      sessionStorage.setItem("userId", newUser._id);
    };
    createNewUser();
  }, []);

  useEffect(() => {
    if (!markedAll) {
      if (durationTimeOut) {
        setTimeout(() => {
          setDurationTimeOut(false);
          setMarkedNotification(false);
        }, (periodTime - durationTime) * 1000);
      } else {
        setTimeout(() => {
          updateNextNotification();
          setDurationTimeOut(true);
        }, durationTime * 1000);
      }
    }
  }, [durationTimeOut]);

  return (
    <>
      <Details periodTime={periodTime} durationTime={durationTime} />
      <div className="notification-wrapper">
        <div>
          {durationTimeOut == false && currNotification && (
            <Notification
              type={currNotification.type}
              message={currNotification.text}
              clickNotificationHandle={clickNotificationHandle}
            />
          )}
          <Messages
            markedAll={markedAll}
            durationTimeOut={durationTimeOut}
            currNotification={currNotification}
            markedNotification={markedNotification}
          />
        </div>
      </div>
    </>
  );
}

export default App;
