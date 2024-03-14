import React, { useContext, useEffect } from "react";
import useChangeForm from "../../customHooks/useChangeForm";
import InputForm from "../atom/InputForm";
import { Button, Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { getUserLogged, login, putAccessToken } from "../../utils/network-data";
import { LoadingContext } from "../../context/LoadingContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { isLoadingPost, setIsLoadingPost } = useContext(LoadingContext);
  const [formLogin, onChangeFormHandler] = useChangeForm({
    email: "",
    password: "",
    error: {
      email: "",
      password: "",
    },
  });
  const onSubmitLoginHandler = async (e) => {
    setIsLoadingPost(true);
    e.preventDefault();
    const result = await login({
      email: formLogin.email,
      password: formLogin.password,
    });
    if (result.data) {
      // console.log(result.data)
      putAccessToken(result.data.accessToken);
      navigate("/");
    }
    setIsLoadingPost(false);
  };
  const checkMe = async () => {
    const result = await getUserLogged();
    if (result.data) {
      navigate("/");
    }
  };
  useEffect(() => {
    checkMe();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-start text-[2rem]">Login</h1>
      <div className="h-100">
        <form className="mt-3 flex flex-col gap-4">
          <InputForm
            form={formLogin}
            name="email"
            type="email"
            error={formLogin.error}
            placeholder="Masukkan Email"
            onChangeForm={onChangeFormHandler("email")}
          />
          <InputForm
            form={formLogin}
            name="password"
            type={"password"}
            error={formLogin.error}
            placeholder="Masukkan Password"
            onChangeForm={onChangeFormHandler("password")}
          />
          <Button
            className="bg-black hover:bg-gray-700"
            onClick={onSubmitLoginHandler}
            disabled={isLoadingPost}
          >
            {isLoadingPost ? <Spinner size="sm" /> : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
