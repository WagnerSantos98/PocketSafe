import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History() {
    const {historicoTransacoes} = useGlobalContext()

    const [...historico] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {historico.map((item) =>{
                const {_id, titulo, quantia, tipo} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: tipo === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {titulo}
                        </p>

                        <p style={{
                            color: tipo === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                tipo === 'expense' ? `-${quantia <= 0 ? 0 : quantia}` : `+${quantia <= 0 ? 0: quantia}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History