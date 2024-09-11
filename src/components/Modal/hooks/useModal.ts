import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export default function useModal(){
    const modalContext = useContext(ModalContext);
    if(!modalContext){
        throw new Error("useModalContext must be used within a ModalContext")
    }
    return modalContext;
}