import { useRouter } from "next/router";
import styles from "./form.module.css";

import { useRef, useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";

import { useDataContext } from "@/context/DataContaxt";

const Form = () => {
  const { setFeedbackStatus, setIsModalOpen } = useDataContext();
  const router = useRouter();
  const EmailValueRef = useRef();
  const NameValueRef = useRef();
  const FeedbackValueRef = useRef();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/Feedback", {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify({
        slug: router.query.slug,
        email: EmailValueRef.current.value,
        name: NameValueRef.current.value,
        feedback: FeedbackValueRef.current.value,
      }),
    }).then((res) => setFeedbackStatus(res.ok));
    setIsModalOpen((open) => !open);
    EmailValueRef.current.value = "";
    FeedbackValueRef.current.value = "";
    NameValueRef.current.value = "";
  };

  return (
    <>
      <div>
        <form className={styles.form} onSubmit={() => HandleSubmit(event)}>
          <div className={styles.row}>
            <div>
              <label className={styles.label}>Your Name:</label>
              <Input ref={NameValueRef} type="text" />
            </div>
            <div>
              <label className={styles.label}>Your Email:</label>
              <Input type="email" ref={EmailValueRef} required={false} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.container}>
              <label className={styles.label}>Your Feedback:</label>
              <textarea
                className={styles.input}
                required={true}
                onChange={(event) =>
                  (event.target.value = event.target.value.replace(
                    /script/g,
                    ""
                  ))
                }
                ref={FeedbackValueRef}
              />
            </div>
            <div>
              <Button className="button">Send Feedback</Button>
              <Button className="button" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
