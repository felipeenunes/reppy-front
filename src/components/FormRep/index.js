import { Container, Content, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddress } from "../../providers/Address";
import { api } from "../../services/api";
import FormAdress from "../FormAdress";
import { useState } from "react";

import { usePicture } from "../../providers/Pictures";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import FormPicture from "../FormPicture";
import { useAuth } from "../../providers/Auth";
import { toast } from "react-toastify";

const FormRepo = () => {
  const { address } = useAddress();
  const [formRegister, setFormRegister] = useState(false);
  const [extras, setExtras] = useState({});
  const { auth } = useAuth();

  const { picture } = usePicture();

  const formSchema = yup.object().shape({
    name: yup.string().required("campo obrigatório"),
    description: yup.string().required("campo obrigatório"),
    price: yup.number().required("campo obrigatório"),
    vacancies_qty: yup.number().required("campo obrigatório"),
    max_occupancy: yup.number().required("campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleFormRepublic = (data) => {
    data["address"] = address;
    if (data["address"]["zip_code"].includes("-")) {
      let cep = data["address"]["zip_code"].replace("-", "");
      data["address"]["zip_code"] = cep;
    }
    data["pictures"] = picture;
    data["price"] = parseFloat(data["price"].toFixed(2));

    data["vacancies_qty"] = Number(data["vacancies_qty"]);
    data["max_occupancy"] = Number(data["max_occupancy"]);
    data["extras"] = extras;

    let config = {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    };

    api
      .post("/republic", data, config)
      .then((response) => {
        console.log(response);
        setFormRegister(!formRegister);
        toast.success("Republica criada com sucesso!");
      })
      .catch((err) => toast.error("Dados inválidos!"));
  };

  return (
    <Container>
      {!formRegister && (
        <FormAdress
          setFormRegister={setFormRegister}
          formRegister={formRegister}
        />
      )}
      {formRegister && (
        <Content>
          <ContainerForm>
            <form onSubmit={handleSubmit(handleFormRepublic)}>
              <h1>Dados Republica</h1>
              <div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Nome"
                    {...register("name")}
                    className="inputs"
                  />

                  {errors.name?.message}

                  <input
                    type="text"
                    placeholder="Descrição"
                    {...register("description")}
                    className="inputs"
                  />

                  {errors.description?.message}

                  <input
                    type="text"
                    placeholder="Preço"
                    {...register("price")}
                    className="inputs"
                  />

                  {errors.price?.message}

                  <input
                    type="texto"
                    placeholder="Quantidades de vagas"
                    {...register("vacancies_qty")}
                    className="inputs"
                  />

                  {errors.vacancies_qty?.message}

                  <input
                    type="texto"
                    placeholder="Vagas disponível"
                    {...register("max_occupancy")}
                    className="inputs"
                  />

                  {errors.max_occupancy?.message}

                  <FormPicture />
                  <div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        name="animals_allowed"
                        value="false"
                        onChange={(e) =>
                          setExtras({
                            ...extras,
                            animals_allowed: e.target.checked,
                          })
                        }
                      />
                      <label for="animals_allowed"> Aceita animais?</label>
                    </div>

                    <input
                      type="checkbox"
                      name="parties_allowed"
                      value="false"
                      onChange={(e) =>
                        setExtras({
                          ...extras,

                          parties_allowed: e.target.checked,
                        })
                      }
                    />
                    <label for="parties_allowed"> É permitido festa?</label>

                    <input
                      type="checkbox"
                      name="wifi"
                      value="false"
                      onChange={(e) =>
                        setExtras({
                          ...extras,

                          wifi: e.target.checked,
                        })
                      }
                    />
                    <label for="wifi">Possui wifi?</label>

                    <input
                      type="checkbox"
                      name="swiming_pool"
                      value="false"
                      onChange={(e) =>
                        setExtras({
                          ...extras,

                          swiming_pool: e.target.checked,
                        })
                      }
                    />
                    <label for="swiming_pool"> Possui piscina?</label>

                    <input
                      type="checkbox"
                      name="grill"
                      value="false"
                      onChange={(e) =>
                        setExtras({
                          ...extras,

                          grill: e.target.checked,
                        })
                      }
                    />
                    <label for="grill"> Possui Churrasqueira</label>
                  </div>
                </div>

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

export default FormRepo;
