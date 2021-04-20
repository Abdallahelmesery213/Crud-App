import React, { Component } from 'react';
class List extends Component {
    state = {
        isEdit:false
    }
    renderCource = ()=> {
        return (
            <li>
                    <span>{this.props.details.name}</span> 
                    <button onClick={()=> {this.toggleState()}}>Edit</button>
                    <button onClick={ ()=> {this.props.deleteCource(this.props.index)}}>Delete</button>
            </li>
        )
    }

    // toggle state
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }
    
    updateCourceItem = (e) =>{
        e.preventDefault();
        this.props.editCource(this.props.index , this.input.value);
        this.toggleState();

    }
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourceItem}>
                <input type="text" ref={(v) =>{this.input = v}} defaultValue={this.props.details.name} />
                <button>Update</button>
            </form>
        )
    }

    render() { 
        let {isEdit} = this.state;
        return ( 
            <React.Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCource() }
            </React.Fragment>
        );
    }
}

export default List;