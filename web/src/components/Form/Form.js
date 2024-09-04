import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const {addRenda, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        titulo: '',
        quantia: '',
        data: '',
        categoria: '',
        descricao: '',
    })

    const { titulo, quantia, data, categoria, descricao } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
        e.preventDefault()
        addRenda(inputState)
        setInputState({
            titulo: '',
            quantia: '',
            data: '',
            categoria: '',
            descricao: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={titulo}
                    name={'titulo'} 
                    placeholder="Título"
                    onChange={handleInput('titulo')}
                />
            </div>
            <div className="input-control">
                <input value={quantia}  
                    type="text" 
                    name={'quantia'} 
                    placeholder={'Quantia'}
                    onChange={handleInput('quantia')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Insira uma data'
                    selected={data}
                    dateFormat="dd/MM/yyyy"
                    onChange={(data) => {
                        setInputState({...inputState, data: data})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={categoria} name="categoria" id="categoria" onChange={handleInput('categoria')}>
                    <option value=""  disabled >Selecione uma opção</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="descricao" value={descricao} placeholder='Adicione uma observação' id="descricao" cols="30" rows="4" onChange={handleInput('descricao')}></textarea>
            </div>
            <div className="submit-btn">
                <Button 
                    name={'Adicionar Renda'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;
export default Form