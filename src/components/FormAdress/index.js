import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddress } from "../../providers/Address";
import { Container } from "./styles";

const FormAdress = ({ setFormRegister, formRegister }) => {
  const { setAddress } = useAddress();
  const formSchema = yup.object().shape({
    uf: yup.string(),
    street: yup.string(),
    street_number: yup.string(),
    city: yup.string(),
    zip_code: yup.string().max(9, "Deve conter 9 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleFormAdress = (data) => {
    console.log(data);
    setAddress(data);
    setFormRegister(!formRegister);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleFormAdress)}>
        <h1> Seu Endereço</h1>
        <div>
          <input type="street" placeholder="Rua" {...register("street")} />
          {errors.street?.message}
          <input
            type="street_number"
            placeholder="Número"
            {...register("street_number")}
          />
          {errors.street_number?.message}
          <input type="uf" placeholder="UF" {...register("uf")} />
          {errors.uf?.message}
          <input type="city" placeholder="Cidade" {...register("city")} />
          {errors.city?.message}
          <input
            type="text"
            placeholder="CEP"
            maxLength="9"
            {...register("zip_code")}
          />
          {errors.zip_code?.message}

          <button type="submit">Próximo</button>
        </div>
      </form>
    </Container>
  );
};

export default FormAdress;
