import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  IDefaultProviderProps,
  ILoginValues,
  IRegisterFormValues,
  IUser,
  IUserContext,
} from "./@types";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      await api.post("/register", formData);
      toast("usuário criado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginValues) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      toast("login realizado com sucesso");
      navigate("/DashBoard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userlogout = async () => {
    try {
      setUser(null);
      localStorage.removeItem("@TOKEN");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ loading, setLoading, user, userRegister, userLogin, userlogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
