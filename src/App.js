import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

export default class App extends React.Component {
constructor()
{
  super()
  this.state= {
    question:'',
    result: ''
  }
}

onClickHandler = (e) => {
  e.preventDefault();
const value = e.target.value;
switch (value) {
  case "=":
    {
      if(this.state.question !== '' || this.state.result !== undefined)
        {
          try {
            this.setState({result: eval(this.state.question), question: '' })
            
          } 
          catch (err){
            this.setState({result: "error"})
          }
        }
      
      else {
        this.setState({result: "error"})
      }
      break;
    }
  case "del": {
    if(this.state.question !== ''){
      const newQuestion = this.state.question.slice(0, this.state.question.length -1)
    this.setState({question: newQuestion })
    }
    break;
  }
  case "C":
    this.setState({question:'', result:''})
    
    break;

  default:
    this.setState({question: this.state.question += value})
    break;
}
}
  
  render()
  {
    const chars = ["(", ")", "del", "C", 7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0 , ".", "=", "+"]
    const table = chars.map((char) => {
      
      return (
        <Button value = {char} onClick={this.onClickHandler} data={char}/>
      )
    })
    return(
     <div className="w-50 m-auto border border-dark border-5 rounded bg-dark shadow-lg">
       <div className="border border-dark border-5 rounded">
         <Input data = {this.state.result} className="border-0 rounded-top w-100 fs-2 bg-light"/> <br/>
         <Input data = {this.state.question} className="border-0 rounded-bottom w-100 fs-1 bg-light" /> 
       </div>
       <div>
        {table}
       </div>
     </div>
    )
  }
}


