import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

// https://www.youtube.com/watch?v=30VeUWxZjS8

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  toast.configure();
  const notify = () =>
    toast("Name: " + name + " Email: " + email + " Message: " + message);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "main",
        "template_mxnp1j6",
        e.target,
        "user_EnhlsRiCsK5BDpWrAiUuj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    notify();
  }

  return (
    <main className="container mt-3 mb-5">
      <center>
        <h1>Contact the software developer</h1>
        <div className="row align-items-center mt-3 boarder-solid">
          <div className="col-12 col-lg-6">
            <div className="frontTitle">
              <h1>Want to get in contact with me?</h1>
              <br />
            </div>
            <div className="frontText">
              This is a great way for you to reach out to me if you like my
              website or have qustions.
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0">
            <form className="mb-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="inputName">Your Full Name:</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="inputFirstName"
                  aria-describedby="nameHelp"
                  placeholder="Enter full name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(name);
                  }}
                  required
                />
                <label htmlFor="inputEmail">Your Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  I'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="inputTextArea">Your Message:</label>
                <textarea
                  value={message}
                  className="form-control"
                  placeholder="Enter message"
                  id="inputTextArea"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  name="message"
                  rows="7"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onChange={(e) => {
                  handleSubmit();
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </center>
    </main>
  );
};
export default ContactPage;
/*const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;*/
