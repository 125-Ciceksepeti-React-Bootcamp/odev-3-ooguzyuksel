import React, { useEffect } from "react";
import "./Notification.css";

function Notification({ notificationCaller, notify, setNotify }) {
  let number = 0;
  useEffect(() => {
    number++;
    if (number > 2) {
      return notificationCaller(setNotify(notify));
    }
  }, [number]);

  const notificationBar = document.querySelector(".notification__panel");

  const locationChanger = () => {
    notificationBar.classList.add("positionChanger");

    setTimeout(() => {
      notificationBar.classList.remove("positionChanger");
      setNotify(false);
    }, 3000);
  };

  if (notify === true) {
    locationChanger();
  }

  return (
    <div className="notification">
      <div className="notification__panel">
        <h3>GREAT !</h3>
        <p>Operation is Successful!</p>
        <div className="round-time-bar">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
