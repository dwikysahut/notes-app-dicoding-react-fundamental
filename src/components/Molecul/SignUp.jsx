import React, { useContext, useState } from "react";
import useChangeForm from "../../customHooks/useChangeForm";
import InputForm from "../atom/InputForm";
import { Button, Spinner } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { register } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { LoadingContext } from "../../context/LoadingContext";

const initialValues = {
  nama: "",
  email: "",
  password: "",
  error: {
    nama: "",
    email: "",
    password: "",
  },
};
export default function SignUp({ onFinishedRegister }) {
  const { isLoadingPost, setIsLoadingPost } = useContext(LoadingContext);

  const [formRegister, onChangeFormHandler, setFormRegisterState] =
    useChangeForm(initialValues);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const onSubmitRegisterHandler = async (e) => {
    setIsLoadingPost(true);
    e.preventDefault();
    const result = await register({
      name: formRegister.nama,
      email: formRegister.email,
      password: formRegister.password,
    });
    setIsLoadingPost(false);

    if (!result.error) {
      setFormRegisterState(initialValues);
      onFinishedRegister();
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-start text-[2rem]">Register</h1>
      <div className="h-100">
        <form className="mt-3 flex flex-col gap-4">
          <InputForm
            form={formRegister}
            name="nama"
            type="nama"
            error={formRegister.error}
            placeholder="Masukkan Nama"
            onChangeForm={onChangeFormHandler("nama")}
          />
          <InputForm
            form={formRegister}
            name="email"
            type="email"
            error={formRegister.error}
            placeholder="Masukkan Email"
            onChangeForm={onChangeFormHandler("email")}
          />
          <InputForm
            form={formRegister}
            name="password"
            type={isShowPassword ? "text" : "password"}
            error={formRegister.error}
            placeholder="Masukkan Password"
            onChangeForm={onChangeFormHandler("password")}
          >
            <div
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </div>
          </InputForm>
          <Button
            className="bg-black hover:bg-gray-700"
            onClick={onSubmitRegisterHandler}
            disabled={isLoadingPost}
          >
            {isLoadingPost ? <Spinner size="sm" /> : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  onFinishedRegister: PropTypes.func,
};
