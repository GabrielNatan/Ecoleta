import { Container } from "./style"
import Logo from "../../Assets/Logo.png"
import Voltar from "../../Assets/Voltar.png"
import Enter from "../../Assets/Login.png"
import { Link,useHistory } from "react-router-dom"
export const Header = () => {
    const {location} = useHistory();
    console.log(location.pathname)
    return (
        <Container>
            <Link to="/"><img src={Logo} alt="logo" /></Link>
            {location.pathname === "/" ?<Link to="/cadastro"><img src={Enter} alt="enter" /> Cadastre um ponto de coleta</Link>
             :<Link to="/"><img src={Enter} alt="enter" />Voltar para home</Link>}
        </Container>
    )
}