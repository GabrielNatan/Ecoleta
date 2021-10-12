import {Container} from "./style"
export const SearchHome = () => {
    return (
        <Container >
            <h2>Pontos de coleta</h2>
            <input className="input-search" type="text" placeholder="Digite a cidade" />
            <input className="input-search"  type="text" placeholder="Digite o estado" />
            <button className="btn-search" >Buscar</button>
        </Container>
    )
}