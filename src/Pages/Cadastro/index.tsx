import { Header } from "../../Components/Header"
import { Container, Cont } from "./style"

export const Cadastro = () => {
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
                        <label  className="numero">
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
                            <label className="checkbox-card">
                                <img src="" alt="icone"/>
                                <input type="checkbox" name="categoria"/>
                            </label>
                        </div>
                       
                    </div>

                    <button className="btn-form" type="submit">Cadastrar ponto de coleta</button>
                </form>
            </Cont>
        </Container>
    )
}