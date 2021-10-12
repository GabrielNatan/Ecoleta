import styled from "styled-components";


export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    .background{
        width: 1000px;
        position: absolute;
        bottom: 0;
        right: 0px;
        z-index: -1;
        transform: rotate(0deg);
    }
    
    .home-container{
        width: 80%;
        flex: 1;
        margin: 0 auto;
        display: flex;
        .home-left{
            display: flex;
            flex-direction: column;
            flex:1;
            padding-top: 160px;

            h1{
                font-size: var(--primary-title);
                color: var(--titulos);
                margin-bottom: 24px;
                width: 560px;

            }

            p{
                color:var(--textos);
                font-size: var(--title);
                margin-bottom: 40px;
                width: 448px;
            }
            .home-btn{
                cursor: pointer;
                width: 348px;
                height:72px;
                border-radius: 8px;
                background-color: var(--greenpeace);
                font-weight: bolder;
                color:var(--blocos);
                display: flex;
                justify-content: space-between;
                align-items: center;
                overflow: hidden;
                padding-right: 40px;
                span{
                    background-color: #2FB86E;
                    width: 72px;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        .home-right{
            flex:1;
            display: flex;
            padding: 60px 0 0 60px;
            img{
               width: 550px;
               height: 600px;
            }
        }
    }
`