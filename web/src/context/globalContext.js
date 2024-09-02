import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:8000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [rendimentos, setRendimentos] = useState([])
    const [despesas, setDespesas] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addRenda = async (renda) => {
        const response = await axios.post(`${BASE_URL}add-renda`, renda)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getRendimentos()
    }

    const getRendimentos = async () => {
        const response = await axios.get(`${BASE_URL}rendimentos`)
        setRendimentos(response.data)
        console.log(response.data)
    }

    const deleteRenda = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-renda/${id}`)
        getRendimentos()
    }

    const totalRenda = () => {
        let totalRenda = 0;
        rendimentos.forEach((renda) =>{
            totalRenda = totalRenda + renda.quantia
        })

        return totalRenda;
    }


    //calculate incomes
    const addDespesa = async (renda) => {
        const response = await axios.post(`${BASE_URL}add-expense`, renda)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getDespesas()
    }

    const getDespesas = async () => {
        const response = await axios.get(`${BASE_URL}despesas`)
        setDespesas(response.data)
        console.log(response.data)
    }

    const deleteDespesa = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-despesa/${id}`)
        getDespesas()
    }

    const totalDespesas = () => {
        let totalRenda = 0;
        despesas.forEach((renda) =>{
            totalRenda = totalRenda + renda.quantia
        })

        return totalRenda;
    }


    const saldoTotal = () => {
        return totalRenda() - totalDespesas()
    }

    const historicoTransacoes = () => {
        const historico = [...rendimentos, ...despesas]
        historico.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return historico.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addRenda,
            getRendimentos,
            rendimentos,
            deleteRenda,
            despesas,
            totalRenda,
            addDespesa,
            getDespesas,
            deleteDespesa,
            totalDespesas,
            saldoTotal,
            historicoTransacoes,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}