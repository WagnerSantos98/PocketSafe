import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../history/History';
import { InnerLayout } from '../../assets/styles/Layouts';
import { real } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalDespesas,rendimentos, despesas, totalRenda, saldoTotal, getRendimentos, getDespesas } = useGlobalContext()

    useEffect(() => {
        getRendimentos()
        getDespesas()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>Todas as Transações</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Renda Total</h2>
                                <p>
                                    {real} {totalRenda()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total de Despesas</h2>
                                <p>
                                    {real} {totalDespesas()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Saldo Atual</h2>
                                <p>
                                    {real} {saldoTotal()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salário</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                R${Math.min(...rendimentos.map(item => item.quantia))}
                            </p>
                            <p>
                                R${Math.max(...rendimentos.map(item => item.quantia))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Despesa</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                R${Math.min(...despesas.map(item => item.quantia))}
                            </p>
                            <p>
                                R${Math.max(...despesas.map(item => item.quantia))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard;