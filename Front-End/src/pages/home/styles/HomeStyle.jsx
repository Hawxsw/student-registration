import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    align-items: center;
    color: ${({ theme }) => theme.text};
     background-color: ${({ theme }) => theme.body};
`;

export const StatsSection = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 960px;
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    left: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        left: 0;
        padding: 10px;
    }
`;

export const DateSection = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const DateInput = styled.input`
    font-size: 16px;
    padding: 10px;
    border-radius: 4px;
    border: ${({ theme }) => theme.border2};
        &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
    transition: border-color 0.2s, box-shadow 0.2s;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ChartBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    min-width: 650px;
    width: auto;

    @media (max-width: 768px) {
        min-width: 200px;
        max-width: 100%;
    }
`;

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const StatBox = styled.div`
    padding: 20px;
    background-color: ${({ theme }) => theme.body};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.text};
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: normal;
    letter-spacing: 0.5px;
`;
