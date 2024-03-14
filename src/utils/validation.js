export const validation = (type, value, handler) => {
  switch (type) {
    case "email":
      if (value.length < 1) {
        handler((prevState) => ({
          ...prevState,
          error: { ...prevState.error, [type]: "Email Tidak boleh kosong" },
        }));
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value))
        handler((prevState) => ({
          ...prevState,
          error: { ...prevState.error, [type]: "Email tidak Valid" },
        }));
      else {
        handler((prevState) => ({
          ...prevState,
          error: { ...prevState.error, [type]: "" },
        }));
      }
      break;
    case "password":
      if (value.length < 1) {
        handler((prevState) => ({
          ...prevState,
          error: { ...prevState.error, [type]: "Password Tidak boleh kosong" },
        }));
      }
      break;
  }
};
