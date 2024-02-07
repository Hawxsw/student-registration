import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { DashboardContainer, StatsSection, ChartBox, StatBox, DateSection, StatsContainer, DateInput, Title } from './styles/HomeStyle';
import { listarAlunos, listarAdmins } from '../../API/apiService';

Chart.register(ArcElement, Tooltip, Legend);



function Dashboard() {
    const [numeroAdmins, setNumeroAdmins] = useState(0);
    const [numeroAlunos, setNumeroAlunos] = useState(0);

    const [dadosGrafico, setDadosGrafico] = useState({
        labels: ['Admins', 'Alunos'],
        datasets: [
            {
                data: [0, 0],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            }
        ]
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const admins = await listarAdmins();
                const alunos = await listarAlunos();
                setDadosGrafico(prevState => ({
                    ...prevState,
                    datasets: [{
                        ...prevState.datasets[0],
                        data: [admins.length, alunos.length],
                    }],
                }));

                setNumeroAdmins(admins.length);
                setNumeroAlunos(alunos.length);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <DashboardContainer>
            <StatsSection>
                <ChartBox>
                    <Title>Painel de Controle</Title>
                    <DateSection>
                        <DateInput type="date" />
                        <DateInput type="date" />
                    </DateSection>
                    <Doughnut data={dadosGrafico} />
                </ChartBox>
                <StatsContainer>
                    <StatBox>
                        <div>Admins Registrados</div>
                        <strong>{numeroAdmins}</strong>
                    </StatBox>
                    <StatBox>
                        <div>Alunos Registrados</div>
                        <strong>{numeroAlunos}</strong>
                    </StatBox>
                </StatsContainer>

            </StatsSection>
        </DashboardContainer>
    );
}

export default Dashboard;