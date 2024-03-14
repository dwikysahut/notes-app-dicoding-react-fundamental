import React, { useContext, useState } from "react";
import Input from "../components/atom/Input";
import { useNavigate } from "react-router-dom";
import InputRichText from "../components/atom/InputRichText";
import { Button } from "reactstrap";
import { addNote } from "../utils/network-data";
import { LoadingContext } from "../context/LoadingContext";
import { Spinner } from "reactstrap";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
export default function TambahCatatan() {
  const { isLoadingPost, setIsLoadingPost } = useContext(LoadingContext);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [formState, setFormState] = useState({
    id: "",
    title: "",
    body: "",
    archived: false,
    createdAt: "",
  });
  const navigate = useNavigate();

  const onChangeFormHandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onChangeFormRichTextHandler = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      body: e.target.innerHTML,
    }));
  };

  const onSubmitFormHandler = async () => {
    setIsLoadingPost(true);
    const result = await addNote({
      title: formState.title,
      body: formState.body,
    });
    if (!result.error) {
      setIsLoadingPost(false);
      alert("catatan berhasil ditambahkan");
      navigate("/");
    }
    setIsLoadingPost(false);
  };
  return (
    <div className="app-container">
      <h1 className="my-4 rounded-lg px-2 py-2 bg-black text-white mx-5 text-center text-lg">
        {language == "id" ? "Tambah Catatan" : "Add Note"}
      </h1>
      <form className="d-flex flex-column gap-3 px-5">
        <Input
          form={formState}
          title={"Judul"}
          name={"title"}
          onChangeForm={onChangeFormHandler}
          placeholder={language == "id" ? "Masukkan Judul" : "Insert Title"}
        />
        <InputRichText
          form={formState}
          name="body"
          placeholder={
            language == "id" ? "Tulis Catatan Disini" : "Type Note Here"
          }
          onChangeForm={onChangeFormRichTextHandler}
        />
        <Button
          className={`w-25 align-self-end ${
            theme == "light" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={onSubmitFormHandler}
          disabled={isLoadingPost}
        >
          {isLoadingPost ? (
            <Spinner size="sm" />
          ) : language == "id" ? (
            "Simpan"
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </div>
  );
}
