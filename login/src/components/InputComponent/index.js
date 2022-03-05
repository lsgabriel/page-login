import React from "react";
import {Input} from './styles';

const InputComponent = (props) =>{
    return(
        <Input type={props.type} placeholder={props.name}/>
    );
}

export default InputComponent;