import React,{Component} from 'react';
import './Button.css';




const Button = (per)=>{
    // const isOperator=val=>{ 
    //     return !isNaN(val)||val==="."||val==="=";
    // };
    // console.log(props)
    // let customclass = isOperator(per.ele)?"":"operator";
    // let classCustom = `button ${isOperator(props.children)?"":"operator"}
    // let lis = ["button"];
    

    //     ["=","+","*","-","/","*","%"].includes(per.ele)? lis.push("operator"):""
    
    return(
                <div
                className="button"
                onClick={()=>per.handleClick(per.ele)}>
                {per.ele}
            </div>
    );
}
export default Button;
// class Button extends Component {
    // isOperator=val=>{ 
    //     return !isNaN(val)||val==="."||val==="=";
    // };


//     render(){
//         return(
            // <div
            //     className={`button ${this.isOperator(this.props.children)?"":"operator"}`} 
            //     onClick={()=>this.props.handleClick
            //     (this.props.children)}>
            //     {this.props.children}
            // </div>
//         )
//   }
// }

// export default Button;