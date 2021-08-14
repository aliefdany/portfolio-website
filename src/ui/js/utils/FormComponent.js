import { useField } from "formik";

function scrollToForm() {
  const element = document.querySelector(".email-form");
  const footer = document.querySelector("footer");
  const footerHeight = element.getBoundingClientRect().height;
  const elementHeight = footer.getBoundingClientRect().height;
  window.scroll(0, document.body.clientHeight - (elementHeight + footerHeight));
}

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        onFocus={scrollToForm}
        className="text-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        onFocus={scrollToForm}
        className="feedback-input"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
