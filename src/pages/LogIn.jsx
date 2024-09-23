import Form from "../configForm/Form";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const handleLogIn = (formData) => {
    console.log("login-payload", formData);
    if (!formData.email || !formData.password) {
      alert("Fill required field");
      return;
    }
    navigate("/signup");
  };
  return (
    <div>
      <Form
        title="Sign-In"
        fields={[
          {
            type: "email",
            name: "email",
            placeholder: "Enter email",
            label: "Email",
            required: "true",
          },
          {
            type: "password",
            name: "password",
            placeholder: "Enter password",
            label: "Password",
            required: "true",
          },
        ]}
        onSubmit={handleLogIn}
      />
    </div>
  );
};

export default LogIn;
