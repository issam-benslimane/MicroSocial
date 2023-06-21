import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../common/components/elements/Button";
import { InputField } from "../../common/components/form";
import { signup } from "../api";
import Layout from "../components/Layout";
import { signupSchema } from "../schemas";
import { SignupDto } from "../types";
import { useAuth } from "../providers/AuthProvider";
import { storage } from "../../common/helpers";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDto>({
    resolver: zodResolver(signupSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (data: SignupDto) => {
    try {
      setIsLoading(true);
      const { user, token } = await signup(data);
      storage.setToken(token);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(handleSignup)}>
        <InputField
          label="name:"
          registration={register("name")}
          error={errors.name?.message}
        />
        <InputField
          label="email:"
          registration={register("email")}
          error={errors.email?.message}
        />
        <InputField
          type="password"
          label="password:"
          registration={register("password")}
          error={errors.password?.message}
        />
        <InputField
          type="password"
          label="confirmation:"
          registration={register("passwordConfirmation")}
          error={errors.passwordConfirmation?.message}
        />
        <Button variant="primary" loading={isLoading}>
          Create my account
        </Button>
      </form>
    </Layout>
  );
};

export default Signup;
