import * as C from './style'
import { Header } from '../../components/Header'
import { SideBarItem } from '../../components/SideBarItem'
import { MainRoutes } from '../../routes/MainRoutes'
import { MdPeopleAlt } from 'react-icons/md'
import { ReactNode, useContext } from 'react'
import { useForm } from '../../context/Context'


type Props = {
    children: ReactNode;
}
export const Theme = ({ children }: Props) => {
    const { state } = useForm()
    return (
        <C.Container>

            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>

                        <SideBarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1} />


                        <SideBarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2} />


                        <SideBarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="email"
                            path="/step3"
                            active={state.currentStep === 3} />


                    </C.Sidebar>

                    <C.Page>
                        {children}
                    </C.Page>

                </C.Steps>

            </C.Area>

        </C.Container>
    )
}


