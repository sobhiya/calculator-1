import React,{Component} from 'react';
import './App.css';
import Button from "./component/Button";
import Input from "./component/Input";
class App extends Component {
  state={
      input:"",
      previousNumber:"",
      currentNumber:"",
      operator:""
    };
  

  addToInput=(val)=>{
    console.log(val,"val in addToInput");
    if(val== "="){
      this.setState({input:eval(this.state.input)})
    }else if(val =="AC"){
      this.setState({input:""})

    }else if(val=="C"){
      this.setState({input:  this.state.input.slice(0,-1)});
    }else{
    this.setState({input:this.state.input+val});
    console.log("clicked addto",val);
  }
  }
  render(){
    return(
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            {/* <p>{this.state.input}</p> */}
            <Input val= {this.state.input}/>
          </div>
        <div className="row">
              
            <Button  handleClick={this.addToInput} ele="AC"/>
            <Button  handleClick={this.addToInput} ele="C"/>
            <Button handleClick={this.addToInput} ele="%"/>
            <Button handleClick={this.addToInput} ele="/"/>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput} ele = "7"/>
            <Button handleClick={this.addToInput} ele = "8"/>
            <Button handleClick={this.addToInput} ele = "9"/>
            <Button handleClick={this.addToInput} ele = "*"/>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput} ele="4"/>
            <Button handleClick={this.addToInput} ele="5"/>
            <Button handleClick={this.addToInput} ele="6"/>
            <Button handleClick={this.addToInput} ele="+"/>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput} ele="1"/>
            <Button handleClick={this.addToInput} ele="2"/>
            <Button handleClick={this.addToInput} ele="3"/>
            <Button handleClick={this.addToInput} ele="-"/>
            </div>
            <div className="row">
            <Button handleClick={this.addToInput} ele="."/>
            <Button handleClick={this.addToInput} ele="0"/>
            <Button handleClick={this.addToInput} ele="00"/>
            <Button handleClick={this.addToInput}  ele="="/>
            </div>          
          
        </div>
      </div>
    );
  }
}
export default App;
