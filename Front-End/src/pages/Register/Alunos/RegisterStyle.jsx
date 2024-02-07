import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.body};
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px; 
    margin: 30px auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 15px;
        margin: 20px auto;
    }

    @media (max-width: 480px) {
        margin: 10px auto;
        padding: 10px;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    ${FormGroup} {
        width: calc(50% - 10px);

        @media (max-width: 768px) {
            width: 100%; /* Ajuste para telas pequenas */
            &:not(:last-of-type) {
                margin-bottom: 20px;
            }
        }
    }
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
    font-size: 16px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: ${({ theme }) => theme.border2};
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }
`;

export const Button = styled.button`
    width: auto;
    padding: 10px 30px;
    margin-left: auto; 
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.text};
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: normal;

    @media (max-width: 768px) {
        font-size: 22px;
    }

    @media (max-width: 480px) {
        font-size: 20px;
    }
`;
