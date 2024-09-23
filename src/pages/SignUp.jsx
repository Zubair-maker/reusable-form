import Form from "../configForm/Form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (formData) => {
    console.log("signup-payload", formData);
    if (!formData.username || !formData.email || !formData.password) {
      alert("Fill required field");
      return;
    }
    navigate("/login");
  };
  return (
    <div>
      <Form
        title="Sign-Up"
        fields={[
          {
            type: "text",
            name: "username",
            placeholder: "Enter username",
            label: "Username",
            required: "true",
          },
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
        onSubmit={handleSignUp}
      />
    </div>
  );
};

export default SignUp;
