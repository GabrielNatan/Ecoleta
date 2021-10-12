import styled from "styled-components";


export const Container =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Cont =  styled.div`
    width:  736px;
    padding: 64px;
    background-color: var(--blocos);
    border-radius: 8px;
    margin-bottom: 60px;

    h1{
        font-size:var(--secondary-title);
        color:var(--titulos);
        margin-bottom: 30px;
        width: 269px;
    }

    form{
        padding: 30px 0;
        display: flex;
        flex-direction: column;

        h2{
            font-size:var(--title);
            color:var(--titulos);
            margin-bottom: 30px;
        }

        label{
            font-size:var(--primary-text);
            color:var(--textos);
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
        }

        input{
            padding: 16px 10px;
            height: 608px;
            border-radius: 8px;
            flex:1;
            background-color: var(--background);
            border:none;
            font-size: var(--secondary-title-font);
            margin-top: 5px;
        }

        .cont-input{
            display: flex;
            gap: 24px;
            flex:1;
            label.label-big{
                flex:1;
            }
            .numero{
                width: 168px;
            }
           
        }

        .checkbox-cont{
            width: 100%;
            display: flex;
            flex-direction: column;
            .checkbox-header{
                display: flex;
                justify-content: space-between;
               
                h2{
                    display: inline-block;
                    flex: 1;
                }
                span{
                    color:var(--textos);
                    font-size: var(--primary-text);
                    padding-top: 10px;
                }
            }

            .checkbox-cont-card{
                width: 100%;
                display: flex;
                gap:16px;
                flex-wrap:wrap;
                margin-bottom: 64px;
                .checkbox-card{
                    width: 192px;
                    height: 184px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 20px;
                    background-color: var(--desaturado);
                    margin-bottom: 0px;
                    position: relative;
                    cursor: pointer;

                    span{
                        width: 80px;
                        font-size: var(----secondary-title-font);
                        color: var(--titulos);
                        text-align:center;
                        font-weight: bolder;
                    }
                    input{
                        visibility: hidden;
                        position: absolute;
                    }
                }
            }

        }
        .btn-form{
            width: 266px;
            height: 56px;
            border-radius: 8px;
            border:none;
            background-color: var(--greenpeace);
            font-size: var(--secondary-title-font);
            color:var(--blocos);
            margin-left: auto;
        }        
    }
`