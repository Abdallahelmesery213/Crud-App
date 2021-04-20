import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/ListItem'
class App extends Component {
  state = { 
    cources : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "JS"}
    ] ,
    current : ''
  }
  updateCource = (e) => {
    this.setState( {current : e.target.value})
  }

  addCource = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let cources = this.state.cources;
    cources.push ( {name : current});
    this.setState({ 
      cources , 
      current : '' 
    })
  }

  deleteCource = (index) => {
    let cources = this.state.cources;
    cources.splice(index , 1);
    this.setState({cources})
  }
  // edit cource
  editCource = (index,value) => {
    let cources = this.state.cources;
    let cource = cources[index];
    cource["name"] = value;
    this.setState({cources})
  }
  render() { 
    const {cources} = this.state;
    const CourseList = cources.map( (cource , index) => {
      return <List details={cource} key={index} index={index} deleteCource={this.deleteCource} editCource={this.editCource}/>
    })
    return (
      <div className="App">
        <h2>Add Course</h2>
        <Form updateCource = {this.updateCource} addCource={this.addCource} current={this.state.current}/>
        <ul>{this.state.cources.length >0 ? CourseList : <h3>There Is No Cources To show</h3>}</ul>
      </div>
    );
  }
}



export default App;
