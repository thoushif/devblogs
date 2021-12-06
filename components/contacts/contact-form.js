import { useEffect, useState } from "react";
import { getNotification } from "../../lib/notification-util";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

async function sendContactData(contactFormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactFormData),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

export default function ContactForm() {
  const initContactForm = { email: "", name: "", message: "" };
  const [contactFormData, setContactFormData] = useState(initContactForm);
  const initReqStatus = {
    status: undefined,
    title: undefined,
    message: undefined
  };
  const [reqStatusObj, setReqStatusObj] = useState(initReqStatus);

  useEffect(() => {
    if (reqStatusObj.status === "success" || reqStatusObj.status === "error") {
      const timer = setTimeout(() => {
        setReqStatusObj(initReqStatus);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reqStatusObj]);

  async function sendMessageHandler(event) {
    event.preventDefault();
    setReqStatusObj(getNotification("pending"));
    try {
      await sendContactData(contactFormData);
      setReqStatusObj(getNotification("success"));
      setContactFormData(initContactForm);
    } catch (err) {
      setReqStatusObj({ ...getNotification("error"), message: err.message });
    }
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setContactFormData({
      ...contactFormData,
      [evt.target.id]: value
    });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={contactFormData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={contactFormData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              required
              value={contactFormData.message}
              onChange={handleChange}
              rows="5"
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={sendMessageHandler}>Send Message</button>
        </div>
      </form>
      {reqStatusObj.status && (
        <Notification
          status={reqStatusObj.status}
          title={reqStatusObj.title}
          message={reqStatusObj.message}
        />
      )}
    </section>
  );
}
