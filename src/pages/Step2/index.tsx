import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectOption } from '../../components/SelectOption'
import { Theme } from '../../components/Theme'
import { useForm } from '../../context/Context'
import * as C from './style'
export const Step2 = () => {

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        }
        else {
            dispatch({
                type: 'SetCurrentStep',
                payload: {
                    currentStep: 2
                }
            })
        }
    }, [])
    const { state, dispatch } = useForm()
    const navigate = useNavigate()
    const handleNextPage = () => {
        navigate('/step3')
    }

    const handleBackPage = () => {
        navigate(-1)
    }
    const setLevel = (level: number) => {
        dispatch({
            type: 'SetLevel',
            payload: {
                level: level
            }
        })
        console.log(level)
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <C.Title>
                    <h1>{state.name}, o que melhor descreve você?</h1>
                    <p>Escolha a melhor opção que condiz com seu estado atual, profissionalmente</p>
                </C.Title>

                <SelectOption
                    title={'Sou iniciante'}
                    subtitle={'Começei a programar há menos de 2 anos'}
                    selected={state.level === 0}
                    onclick={() => setLevel(0)} />

                <SelectOption
                    title={'Sou programador'}
                    subtitle={'Já programo há 2 anos ou mais'}
                    selected={state.level === 1}
                    onclick={() => setLevel(1)} />
                <C.Buttons>
                    <button onClick={handleBackPage}>Voltar</button>
                    <button onClick={handleNextPage}>Próximo</button>
                </C.Buttons>
            </C.Container>
        </Theme>
    )
}