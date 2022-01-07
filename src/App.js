import React from 'react';
import './App.css';

/* function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      <p>{props.mytext}</p>
    </div>
  )
} */

class Helloworld extends React.Component{
  state={
    show: true
  }

  toggleShow=()=>{
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show){
      return(
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.mytext}</p>
        <button onClick={this.toggleShow}>Toggle Show</button>
      </div>
      )
    }
    else{
      return <div>
        <p>No hay información</p>
        <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
    }
  }
}
function App() {
  return (
    <div>This is my component:
      <Helloworld
        mytext="Hello People"
        subtitle="Subtitle"
      />
      <Helloworld
        mytext="Hello People 2" />
    </div>
  );
}
export default App;
