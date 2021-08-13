import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput, TextArea } from "../utils/FormComponent";
import { useEffect, useState } from "react";

const EmailForm = ({ currentlyLightTheme }) => {
  const [ssr, setSSR] = useState(true);
  const emailBg = {
    background: currentlyLightTheme && !ssr ? "#CEC8B2" : "#012a1c",
  };
  const linkBg = {
    background: currentlyLightTheme && !ssr ? "hsl(169, 38%, 38%)" : "#012a1c",
  };

  useEffect(() => {
    setSSR(false);
  }, []);

  return (
    <section className="email-form" style={emailBg}>
      <h1>Email Me !</h1>
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
          feedback: Yup.string().max(50, "it's to long!").required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
              placeholder="jane@formik.com"
            />
          </div>
          <div className="form-feedback">
            <TextArea
              label="Your feedback"
              name="feedback"
              type="textarea"
              placeholder="Your thoughts......"
            />
          </div>
          <div className="form-button">
            <button style={linkBg} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default EmailForm;
