import jwtDecode from 'jwt-decode';
import { ModalBackground, MainContainer, AddressSection } from "./style"
import { useEffect, useState } from "react"
import { useAuth } from "../../providers/Auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from '../../services/api';
import { toast } from "react-toastify";
import { MdKeyboardArrowDown } from 'react-icons/md'


const UpdateUserForm = () => {
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState({})
    const [openAddress, setOpenAddress] = useState(false)
    const { auth } = useAuth();
    const formSchema = yup.object().shape({
        name: yup.string(),
        email: yup.string().email("email inválido"),
        college: yup.string(),
        phone_number: yup.string(),
        street: yup.string(),
        street_number: yup.string(),
        city: yup.string(),
        zip_code: yup.string(),
        uf: yup.string(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });

    useEffect(() => {
        const userToken = jwtDecode(auth);
        setUser(userToken.sub);
    }, [])

    const checkClickLocation = e => {

        if (typeof (e.target.className) === 'string') {
            if (e.target.className.includes('container')) {
                setOpenModal(false);
            }
        }
    }

    const setAddressVisibility = () => {
        setOpenAddress(!openAddress)
    }

    const updateData = data => {
        let address = {}

        if (data['street']) {
            address['street'] = data['street']
            delete data['street']
        }

        if (data['street_number']) {
            address['street_number'] = data['street_number']
            delete data['street_number']
        }

        if (data['city']) {
            address['city'] = data['city']
            delete data['city']
        }

        if (data['zip_code']) {
            address['zip_code'] = data['zip_code']
            delete data['zip_code']
        }

        if (data['uf']) {
            address['uf'] = data['uf']
            delete data['uf']
        }

        if (Object.keys(address).length > 0) {
            data['address'] = address
        }

        for (let key in data) {
            if (data[key] === '')
                delete data[key]
        }

        api.patch('/user', data, {
            headers: { Authorization: `Bearer ${auth}` }
        })
            .then(res => {
                toast.success("Dados atualizados com sucesso!")
            })
            .catch(err => {
                toast.error("Não foi possível atualizar usuário")
            })

    }

    console.log(errors)
    return (
        openModal ? (
            <ModalBackground className='container' onClick={e => checkClickLocation(e)}>
                <MainContainer className='main' openAddress={openAddress}>
                    <form onSubmit={handleSubmit(updateData)} className='updateForm'>
                        <p className='input-wrapper'>
                            <label> Nome: </label>
                            <input
                                placeholder={user.name}
                                {...register("name")} />
                        </p>
                        <p className='input-wrapper'>
                            <label> Faculdade: </label>
                            <input
                                placeholder={user.college}
                                {...register("college")} />
                        </p>
                        <p className='input-wrapper'>
                            <label> Email: </label>
                            <input
                                placeholder={user.email}
                                {...register("email")} />
                        </p>
                        <p className='input-wrapper'>
                            <label> Telefone: </label>
                            <input
                                placeholder={user.phone_number}
                                {...register("phone_number")} />
                        </p>
                        <p className='address-presenter'>
                            <span onClick={setAddressVisibility}> Dados do endereço <MdKeyboardArrowDown /> </span>
                        </p>
                        <AddressSection>
                            {openAddress && <div>
                                <p className='input-wrapper'>
                                    <label> Rua: </label>
                                    <input
                                        placeholder={user.address.street}
                                        {...register("street")} />
                                </p>
                                <p className='input-wrapper'>
                                    <label> Numero: </label>
                                    <input
                                        placeholder={user.address.street_number}
                                        {...register("street_number")} />
                                </p>
                                <p className='input-wrapper'>
                                    <label> Cidade: </label>
                                    <input
                                        placeholder={user.address.city}
                                        {...register("city")} />
                                </p>
                                <p className='input-wrapper'>
                                    <label> CEP: </label>
                                    <input
                                        placeholder={user.address.zip_code}
                                        {...register("zip_code")} />
                                </p>
                                <p className='input-wrapper'>
                                    <label> Estado: </label>
                                    <input
                                        placeholder={user.address.uf}
                                        {...register("uf")} />
                                </p>
                            </div>}
                        </AddressSection>
                        <button>
                            Atualizar
                        </button>

                    </form>
                </MainContainer>
            </ModalBackground >
        )
            :
            <button onClick={() => setOpenModal(true)}> Abrir Modal </button>
    )
}

export default UpdateUserForm