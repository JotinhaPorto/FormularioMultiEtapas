import { createContext, ReactNode, useContext, useReducer } from "react"

type initialStateType = {
    name: string;
    email: string;
    gitHub: string;
    currentStep: number;
    level: 0 | 1;
}


type ActionType = {
    type: string;
    payload: any
}


type ContextType = {
    state: initialStateType;
    dispatch: (action: ActionType) => void;
}
type ProviderType = {
    children: ReactNode;
}
const initialState: initialStateType = {
    name: '',
    email: '',
    gitHub: '',
    currentStep: 0,
    level: 0
}

const FormContext = createContext<ContextType | undefined>(undefined)


const userReducer = (state: initialStateType, action: ActionType) => {
    switch (action.type) {
        case 'SetName':
            return { ...state, name: action.payload.name }
        case 'SetEmail':
            return { ...state, email: action.payload.email }
        case 'SetGitHub':
            return { ...state, gitHub: action.payload.gitHub }
        case 'SetCurrentStep':
            return { ...state, currentStep: action.payload.currentStep }
        case 'SetLevel':
            return { ...state, level: action.payload.level }
        default:
            return state;
    }

}

export const FormProvider = ({ children }: ProviderType) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do contexto')
    }
    return context;
}




