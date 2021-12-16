import { Container, Content, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useAuth } from "../../providers/Auth";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import republica from "../../asserts/republica-estudantes.jpg";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import Logo from "../../components/Logo";

const Login = () => {
  const { setAuth } = useAuth();
  const [visibility, setVisibility] = useState(true);
  const [typePassword, setTypePassword] = useState("password");

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleFormLogin = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.token);
        setAuth(response.data.token);
        console.log(response.data);
        //acessar a pagina interna
      })
      .catch((err) => toast.error("Email de usuário ou senha inválida!"));
  };

  const showPassword = () => {
    setVisibility(!visibility);
    if (visibility) {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
    console.log(typePassword);
  };

  const history = useHistory();

  return (
    <Container>
      <Content>
        <img src={republica} alt="Republica" className="image" />
        <ContainerForm>
          <form onSubmit={handleSubmit(handleFormLogin)}>
            <div>
              <AiOutlineArrowLeft
                className="back"
                size={40}
                onClick={() => history.push("/")}
              />
            </div>
            <Logo />
            <h1> Fazer Login</h1>
            <div>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="email"
                  {...register("email")}
                  className="inputs"
                />

                {errors.email?.message}

                <input
                  id="password"
                  type={typePassword}
                  placeholder="password"
                  {...register("password")}
                  className="inputs"
                />
                <label for="password">
                  {visibility ? (
                    <BsFillEyeSlashFill
                      size={20}
                      onClick={showPassword}
                      className="eye-icon"
                    />
                  ) : (
                    <IoEyeSharp
                      size={20}
                      className="eye-icon"
                      onClick={showPassword}
                    />
                  )}
                </label>
              </div>
              {errors.password?.message}
              <span>
                <Link to={"/register"}> Não tem cadastro? Cadastre-se! </Link>
              </span>
              <button type="submit">Acessar</button>
            </div>
          </form>
        </ContainerForm>
      </Content>
    </Container>
  );
};

export default Login;
