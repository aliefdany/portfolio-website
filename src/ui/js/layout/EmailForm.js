import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput, TextArea } from "../utils/FormComponent";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { BiX } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

import { send } from "emailjs-com";

const EmailForm = ({ currentlyLightTheme }) => {
  const [ssr, setSSR] = useState(true);
  const [showModal, setModal] = useState(false);
  const emailBg = {
    background: currentlyLightTheme && !ssr ? "#CEC8B2" : "#012a1c",
  };
  const linkBg = {
    background: currentlyLightTheme && !ssr ? "hsl(169, 38%, 38%)" : "#012a1c",
  };

  function toggleModal() {
    setModal(!showModal);
  }

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  useEffect(() => {
    setSSR(false);
  }, []);

  return (
    <section className="email-form" style={emailBg}>
      <h1>
        Email Me !
        <span role="img" aria-label="post-box">
          📮
        </span>
      </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          feedback: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          feedback: Yup.string().max(50, "it's too long!").required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          send(
            "service_a1wxu9q",
            "template_cbw8xtk",
            values,
            "user_qPqEFvtFfUKVdCwgsT1xD"
          )
            .then(() => {
              // console.log("SUCCESS!", response.status, response.text);
              setModal(true);
              setSubmitting(false);
              resetForm();
            })
            .catch((err) => {
              console.log("FAILED...", err);
            });
          // setTimeout(() => {
          //   // alert(JSON.stringify(values, null, 2));
          //   setModal(true);
          //   setSubmitting(false);
          //   resetForm();
          // }, 400);
        }}
      >
        <Form className="form">
          <div className="form-identity">
            <TextInput
              label="Your Name"
              name="name"
              type="text"
              placeholder="Jane"
            />

            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@doe.com"
            />
          </div>
          <div className="form-feedback">
            <TextArea
              label="Your feedback"
              name="feedback"
              type="textarea"
              placeholder="Any thoughts ..."
            />
          </div>
          <div className="form-button">
            <button style={linkBg} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
      {showModal ? (
        <Modal>
          {/* eslint-disable-next-line */}
          <div onClick={toggleModal} className="modal-bg">
            <div className="modal mail">
              <BiX onClick={toggleModal} className="exit-icon" />
              <h1>
                Email Sent{" "}
                <span>
                  <FaCheck style={{ color: "green" }} />
                </span>
              </h1>
            </div>
          </div>
        </Modal>
      ) : null}
    </section>
  );
};

export default EmailForm;
