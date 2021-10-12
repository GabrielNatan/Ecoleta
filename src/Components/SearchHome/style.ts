import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    h2{
        margin-bottom: 15px;
        color:var(--blocos);
        font-size: var(--secondary-title);
    }

    .input-search{
        width: 420px;
        height: 56px;
        border-radius: 8px;
        background-color: var(--blocos);
        padding: 0 24px;
        border:none;
    }
    .btn-search{
        width: 420px;
        height: 56px;
        border-radius: 8px;
        background-color: var(--greenpeace);
        font-weight: bolder;
        border:none;
        color:var(--blocos);
        font-size: var(--secondary-title-font);
        cursor: pointer;
    }
`
