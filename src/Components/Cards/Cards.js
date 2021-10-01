import React, { useState } from "react";
import Rating from "../Rating/Rating";
import "./Card.css";
import { FaPen } from "react-icons/fa";
import Modal from "../Modal/Modal";
import Notification from "../Notification/Notification";

function Cards({ books, deleteBook }) {
  const [modal, setModal] = useState(false);
  const [notify, setNotify] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleChangeHandler, setTitleChangeHandler] = useState("");

  const handleDelete = (rank) => {
    deleteBook(rank);
  };

  const titleHandler = (title, description) => {
    setTitle(title);
    setDescription(description);
  };

  const modalToggler = () => {
    setModal(!modal);
  };

  const notificationCaller = () => {
    setNotify(true);
  };

  const descriptionChanger = (newText, newTitle) => {
    setDescription(newText);
    setTitleChangeHandler(newTitle);
    modalToggler();
  };

  return (
    <>
      <div className="card_container">
        {books.map((book) => (
          <div key={book.rank} className="card">
            <img src={book.book_image} alt={book.title} />
            <div className="card__rating">
              <Rating />
              <small>{Math.floor(Math.random() * 100) + 1}.K Review</small>
            </div>
            <p className="card__title">{book.title}</p>
            <small>from</small>
            <i>{book.author}</i>
            <small>
              <p>
                {titleChangeHandler === book.title
                  ? description
                  : book.description}
              </p>
            </small>
            <div className="card__button">
              <a href={book.amazon_product_url} target="_blank">
                <button>Purchase</button>
              </a>
              <button
                onClick={() => {
                  handleDelete(book.rank);
                  notificationCaller();
                }}
              >
                Delete
              </button>
              <button onClick={modalToggler}>
                <FaPen
                  onClick={() => {
                    titleHandler(book.title, book.description);
                  }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        modal={modal}
        setModal={setModal}
        modalToggler={modalToggler}
        books={books}
        title={title}
        description={description}
        descriptionChanger={descriptionChanger}
      />
      <Notification
        notificationCaller={notificationCaller}
        notify={notify}
        setNotify={setNotify}
      />
    </>
  );
}

export default Cards;
