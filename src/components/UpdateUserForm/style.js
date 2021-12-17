import styled from "styled-components";

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;

`;

const MainContainer = styled.main`
    width: 50%;
    background-color: #edecec;
    box-sizing: border-box;
    padding: 20px;
    height: 570px;
    
    > form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .input-wrapper {
        width: 400px;
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid grey;
        padding-bottom: 6px;

        > label {
            text-align: right;
            color: #f25d27;
        }

        > input {
            padding: 5px;
            border: none;
            color: #222;
            width: 250px;
        }
    }

    > form > .address-presenter {
        text-align: center;
        margin-top: 10px;

        > span {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #f25d27;
        }

        > span > svg {
            margin-left: 10px;
            font-size: 30px;
            transform: ${props => props.openAddress ? 'rotate(180deg)' : 'rotate(0)'};
            transition: .3s;
        }
    }

    > form > button {
        background-color: #f25d27;
        padding: 5px 15px;
        color: #FFF;
        border: none;
        border-radius: 5px;
    }

    > form > button:hover {
        filter: brightness(1.2);
    }

`;

const AddressSection = styled.section`
    margin-bottom: 15px;
    overflow: hidden;
`;

export { ModalBackground, MainContainer, AddressSection }