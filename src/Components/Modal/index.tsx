import Modal from "react-modal"
import { Children, ReactChildren, ReactNode } from "react";
import {Container} from "./style"

type PropsModal = {
    children: ReactNode
}

const customStyles = {
    content:{
        backgroundColor:"transparent",
        width:500,
        height:500,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border:"none"
    },
    overlay:{
        backgroundColor:"rgba(0,0,0,0.9)"
    }
  };

export const ModalComponent = ({children}:PropsModal)=>{
    return(
       
    <Modal style={customStyles}  isOpen={false} >
            {children}
    </Modal>
        
    )
}