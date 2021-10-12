import { Header } from "../../Components/Header"
import { Container, Cont } from "./style"
import Lampada from "../../Assets/Lampadas.png"
import Baterias from "../../Assets/Baterias.png"
import Oleo from "../../Assets/Oleo.png"
import Organicos from "../../Assets/Organicos.png"
import Papeis from "../../Assets/Papeis.png"
import Eletronicos from "../../Assets/Eletronicos.png"
export const Cadastro = () => {
    const data = [
        { title: "Lampadas", img: Lampada },
        { title: "Pilhas e Baterias", img: Baterias },
        { title: "Papéis e Papelão", img: Papeis },
        { title: "Pilhas e Baterias", img: Eletronicos },
        { title: "Resíduos Orgânicos", img: Organicos },
        { title: "Óleo de Cozinha", img: Oleo },
    
    ]

    return (
        <Container>
            <Header />
            <Cont>
                <h1>Cadastro do ponto de coleta</h1>

                <form>
                    <h2>Dados da entidade</h2>
                    <label>
                        Nome da entidade
                        <input type="text" />
                    </label>
                    <div className="cont-input">
                        <label className="label-big">
                            Endereço
                            <input type="text" />
                        </label>
                        <label className="numero">
                            Número
                            <input type="text" />
                        </label>
                    </div>
                    <div className="cont-input">
                        <label className="label-big">
                            Cidade
                            <input type="text" />
                        </label>
                        <label className="label-big">
                            Estado
                            <input type="text" />
                        </label>
                    </div>

                    <div className="checkbox-cont">
                        <div className="checkbox-header">
                            <h2>Ítens de coleta</h2>
                            <span>Selecione um ou mais ítens abaixo</span>
                        </div>
                        <div className="checkbox-cont-card">
                            {data.map(each => {
                                return (
                                    <label className="checkbox-card">
                                        <img src={each.img} alt={each.title} />
                                        <span>{each.title}</span>
                                        <input type="checkbox" name="categoria" />
                                    </label>
                                )
                            })}
                        </div>

                    </div>

                    <button className="btn-form" type="submit">Cadastrar ponto de coleta</button>
                </form>
            </Cont>
        </Container>
    )
}