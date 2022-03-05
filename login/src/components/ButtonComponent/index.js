import React from "react";
import {Btn} from './styles';

const ButtonComponent = (props) =>{
    return(
        <Btn style={{backgroundColor:props.bg}}>
            {props.title}   {props.icon}
        </Btn>
    );
}

export default ButtonComponent;