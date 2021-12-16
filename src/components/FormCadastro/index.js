import { Container, Content, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddress } from "../../providers/Address";
import { api } from "../../services/api";
import FormAdress from "../FormAdress";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { AiOutlineArrowLeft } from "react-icons/ai";

const FormCadastro = () => {
  const { address } = useAddress();
  const history = useHistory();
  const [visibility, setVisibility] = useState(true);
  const [typePassword, setTypePassword] = useState("password");
  const [formRegister, setFormRegister] = useState(false);
  const formSchema = yup.object().shape({
    cpf: yup
      .string()
      .required("campo obrigatório")
      .test("len", "Must be exactly 11 characters", (cpf) => cpf.length === 11),
    name: yup.string().required("campo obrigatório"),
    email: yup.string().required("campo obrigatório").email("email inválido"),
    college: yup.string().required("campo obrigatório"),
    phone_number: yup.string().required("campo obrigatório"),
    //   .matches("([1-9]d)s?d{5}-d{4}", "Formato válido:(xx)xxxxx-xxxx"),
    password: yup
      .string()
      .required("campo obrigatório")
      .min(6, "Minimo 6 caractéres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleFormCadastro = (data) => {
    data["address"] = address;
    if (data["address"]["zip_code"].includes("-")) {
      let cep = data["address"]["zip_code"].replace("-", "");
      data["address"]["zip_code"] = cep;
    }
    if (data["cpf"].includes(".")) {
      let cpf = data["cpf"].replace(".", "");
      data["cpf"] = cpf;
    }
    if (data["cpf"].includes("-")) {
      let cpf = data["cpf"].replace("-", "");
      data["cpf"] = cpf;
    }
    console.log(data);
    api
      .post("/user", data)
      .then((response) => {
        console.log(response);
        history.push("/login");
        setFormRegister(!formRegister);
        toast.success("Cadastro criado com sucesso!");
      })
      .catch((err) => toast.error("Email usuário ou cpf existente!"));
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

  return (
    <Container>
      <div className="back">
        <AiOutlineArrowLeft
          className="back"
          size={40}
          onClick={() => history.push("/")}
        />
      </div>
      {/* <h1> Cadastro Na Reppy</h1> */}
      {!formRegister && (
        <FormAdress
          setFormRegister={setFormRegister}
          formRegister={formRegister}
        />
      )}
      {formRegister && (
        <Content>
          <ContainerForm>
            <form onSubmit={handleSubmit(handleFormCadastro)}>
              <h1>Dados Pessoais</h1>
              <div>
                <div className="input-wrapper">
                  <input
                    type="cpf"
                    placeholder="CPF"
                    {...register("cpf")}
                    className="inputs"
                  />

                  {errors.cpf?.message}

                  <input
                    type="text"
                    placeholder="Nome"
                    {...register("name")}
                    className="inputs"
                  />

                  {errors.name?.message}

                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="inputs"
                  />

                  {errors.email?.message}

                  <input
                    type="text"
                    placeholder="Faculdade / Universidade"
                    {...register("college")}
                    className="inputs"
                  />

                  {errors.college?.message}

                  <input
                    type="texto"
                    placeholder="Celular (xx)xxxxx-xxxx"
                    {...register("phone_number")}
                    className="inputs"
                  />

                  {errors.phone_number?.message}
                  <div className="wrapper">
                    <input
                      id="password"
                      type={typePassword}
                      placeholder="Senha"
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
                </div>
                {errors.password?.message}

                <div className="buttons">
                  <button type="submit">
                    Registrar{""}
                    <span>
                      <TiArrowRightThick />
                    </span>
                  </button>
                  <button onClick={() => setFormRegister(!formRegister)}>
                    <span>
                      <TiArrowLeftThick />
                    </span>
                    Voltar
                  </button>
                </div>
              </div>
            </form>
          </ContainerForm>
        </Content>
      )}
    </Container>
  );
};

export default FormCadastro;
