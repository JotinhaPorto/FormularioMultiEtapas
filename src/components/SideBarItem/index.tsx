import { Link } from 'react-router-dom'
import * as C from './style'
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg'
import { ReactComponent as BookIcon } from '../../svgs/book.svg'
import { ReactComponent as MailIcon } from '../../svgs/mail.svg'

type Props = {
    title: string;
    description: string;
    icon: string
    path: string;
    active: boolean
}
export const SideBarItem = ({ title, description, path, icon, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Title>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </C.Title>
                <C.Icon active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill='white' width={28} height={28} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill='white' width={28} height={28} />
                    }
                    {icon === 'email' &&
                        <MailIcon fill='white' width={28} height={28} />
                    }
                </C.Icon>
                <C.Pointer active={active}></C.Pointer>
            </Link>
        </C.Container >
    )
}