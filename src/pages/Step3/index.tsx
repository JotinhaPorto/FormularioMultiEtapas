import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { useForm } from '../../context/Context'
import * as C from './style'
export const Step3 = () => {

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        }
        else {
            dispatch({
                type: 'SetCurrentStep',
                payload: {
                    currentStep: 3
                }
            })
        }
    }, [])
    const navigate = useNavigate()
    const { state, dispatch } = useForm()
    const handleFinishRegister = () => {
        if (state.email != '' && state.gitHub != '') {
            console.log(state)
        } else {
            alert('Preencha com os dados')
        }
    }
    const handleBackPage = () => {
        navigate(-1)
    }
    return (
        <Theme>
        <C.Container>
            <p>Passo {state.currentStep}/3</p>
            <C.Title>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a melhor opção que condiz com seu estado atual, profissionalmente</p>
            </C.Title>
            <C.Label>
                Qual seu email?
                <input
                    type="text"
                    value={state.email}
                    onChange={e => dispatch({
                        type: 'SetEmail',
                        payload: {
                            email: e.target.value
                        }
                    })} />
            </C.Label>
            <C.Label>
                Qual seu GitHub?
                <input
                    type="text"
                    value={state.gitHub}
                    onChange={e => dispatch({
                        type: 'SetGitHub',
                        payload: {
                            gitHub: e.target.value
                        }
                    })} />
            </C.Label>
            <C.Buttons>
                <button onClick={handleBackPage}>Voltar</button>
                <button onClick={handleFinishRegister}>Próximo</button>
            </C.Buttons>
        </C.Container>
        </Theme>
    )
}