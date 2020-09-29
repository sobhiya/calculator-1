import React from 'react';
import './Input.css';




const Input = (props)=>{
    return(
        <div className="input">
            <p>{props.val}</p>
        </div>
    )
}







// class Input extends Component {
//     // isOperator=val=>{ 
//     //     return !isNaN(val)||val==="."||val==="=";
//     // };


//     render(){
//         return(
//             <div className="input">
//                 <P>{props.val}</P>
//             </div>
//         )
//   }
// }

export default Input;