import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../assets/styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {addRenda,rendimentos, getRendimentos, deleteRenda, totalRenda} = useGlobalContext()

    useEffect(() =>{
        getRendimentos()
    }, [])
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Rendimentos</h1>
                <h2 className="total-income">Renda Total: <span>${totalRenda()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {rendimentos.map((renda) => {
                            const {_id, titulo, quantia, data, categoria, descricao, tipo} = renda;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                titulo={titulo} 
                                descricao={descricao} 
                                quantia={quantia} 
                                data={data} 
                                tipo={tipo}
                                categoria={categoria} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteRenda}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Income