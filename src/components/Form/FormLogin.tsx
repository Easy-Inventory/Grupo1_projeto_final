import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StykedForm } from "../../Pages/LoginPage/style";
import { ILoginValues } from "../../provides/TypesUser";
import { UserContext } from "../../provides/UserContext";
import { InputForm } from "../InputForm/InputForm";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginValues>();

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StykedForm onSubmit={handleSubmit(submit)}>
      <InputForm
        label="email"
        placeholder="Digite seu Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <InputForm
        label="senha"
        placeholder="Digite sua Senha"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <button>Entrar</button>
    </StykedForm>
  );
};
