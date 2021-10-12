import { Container } from "./style"
import Logo from "../../Assets/Logo.png"
import Enter from "../../Assets/Login.png"
import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <Container>
            <img src={Logo} alt="logo" />
            <Link to="/cadastro"><img src={Enter} alt="enter" /> Cadastre um ponto de coleta</Link>
        </Container>
    )
}