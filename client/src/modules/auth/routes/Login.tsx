import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../common/components/elements/Button";
import { InputField } from "../../common/components/form";
import { login } from "../api";
import { LoginDto } from "../types";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { storage } from "../../common/helpers";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginDto>();
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (data: LoginDto) => {
    try {
      setIsLoading(true);
      const { user, token } = await login(data);
      storage.setToken(token);
      setUser(user);
      navigate("/");
    } catch (error) {
      setIsValid(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        {!isValid && (
          <p className="text-red-500 text-sm">Username or Password incorrect</p>
        )}
        <InputField label="email:" registration={register("email")} />
        <InputField
          type="password"
          label="password:"
          registration={register("password")}
        />
        <Button variant="primary" loading={isLoading}>
          Log in
        </Button>
      </form>
    </Layout>
  );
};

export default Login;
