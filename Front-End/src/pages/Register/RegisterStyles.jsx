import styled from 'styled-components';


export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    background-color: #f0f2f5;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    border: 1px solid #eee;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
    last-child: {
      margin-bottom: 0;
    }
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #333;
    font-size: 16px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; 
    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 0 2px rgba(0,123,255,.25); 
`;

export const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0,123,255,.5);
    }
`;

export const Title = styled.h2`
    color: #333; /* Cor do texto */
    text-align: center; /* Alinhamento do texto */
    font-size: 24px; /* Tamanho da fonte */
    margin-bottom: 20px; /* Espaçamento abaixo do título */
    font-weight: normal; /* Peso da fonte, ajuste conforme necessário */
`;