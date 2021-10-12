import {Container} from "./style"
import Search from "../../Assets/Buscar.png"
import People from "../../Assets/Pessoinhas.png"
import Background from "../../Assets/Background.png"
import { Header } from "../../Components/Header"
import { ModalComponent } from "../../Components/Modal"
import { SearchHome } from "../../Components/SearchHome"



export const Home = ()=>{
    return(
        <Container>
            <Header/>
            <ModalComponent>
                <SearchHome/>
            </ModalComponent>
            <div className="home-container">
                <div className="home-left">
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <div className="home-btn"><span><img alt="pesquisa" src={Search}/></span>Pesquisar pontos de coleta</div>
                </div>
                <div className="home-right">
                    <img src={People} alt="icon"/>
                </div>
            </div>
            <img className="background" src={Background} alt="background"/>
        </Container>
    )
}