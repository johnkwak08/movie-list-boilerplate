import React from 'react';
import App from './App.jsx';

var Search = (props) => {

    return (
        <form>
            <label>
                {console.log(props)}
                <input type='text' value={props.value} onChange={props.handleChange}/>
            </label>
            <button onSubmit={props.handleSubmit(props.value)}>Go!</button>
        </form>
    )
}


export default Search;