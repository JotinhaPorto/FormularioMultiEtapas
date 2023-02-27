import * as C from './style'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {  useForm } from '../../context/Context'
import { Theme } from '../../components/Theme'
export const Step1 = () => {
    useEffect(() => {
        dispatch({
            type: 'SetCurrentStep',
            payload: {
                currentStep: 1
            }
        })
    }, [])

    const { state, dispatch } = useForm()
    const navigate = useNavigate()
    const handleNextPage = () => {
        if (state.name != '') {
            navigate('/step2')
        }
        else {
            alert('Preencha o campo')
        }
    }
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'SetName',
            payload: {
                name: e.target.value
            }
        })
    }
    return (
        <Theme >
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <C.Title>
                    <h1>Vamos começar com seu nome</h1>
                    <p>Preencha o campo abaixo com seu nome completo</p>
                </C.Title>
                <C.Label>
                    Seu nome completo
                    <input type="text" value={state.name} onChange={handleChangeInput} />
                </C.Label>
                <button onClick={handleNextPage}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

