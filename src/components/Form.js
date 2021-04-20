import React from 'react';
const Form = (props) => {

    return ( 
        <form onSubmit={props.addCource}>
            <input type="text" value={props.current} onChange={props.updateCource}/>
            <button type="submit">Add Cource</button>
        </form>
    );
}

export default Form;