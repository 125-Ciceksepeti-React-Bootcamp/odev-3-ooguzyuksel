import React, { useState } from "react";
import Notification from "../Notification/Notification";
import "./Modal.css";

function Modal({
  modal,
  modalToggler,
  title,
  description,
  descriptionChanger,
}) {
  const [text, setText] = useState("");
  const [notify, setNotify] = useState(false);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const notificationCaller = () => {
    setNotify(true);
  };

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="modal__body">
            <button className="modal__close" onClick={modalToggler}>
              X
            </button>
            <h1>{title}</h1>
            <textarea
              cols="30"
              className="modal__textarea"
              placeholder={description}
              onChange={onChangeHandler}
            />
            <button
              onClick={() => {
                descriptionChanger(text, title);
                notificationCaller();
              }}
              className="modal-button"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      <Notification
        notificationCaller={notificationCaller}
        notify={notify}
        setNotify={setNotify}
      />
    </div>
  );
}

export default Modal;
