import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ title, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () =>{
    onSubmit(formData)
    setFormData({})
  }
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={styles.headng}>{title}</h2>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor="">{field.label}</label>
          <input
            className={styles.inputField}
            type={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ""}
            onChange={handleChange}
          />
        </div>
      ))}
      <button className={styles.button} type="submit">
        {title}
      </button>
    </form>
  );
};

export default Form;
