import React from 'react';

const Search = (props) => (
    <form onSubmit={props.handleSubmit}>
        <label>
            <input type='text' placeholder='Search...'
            value={props.values}
            onChange={props.handleChange}/>
        </label>
        <button>Go!</button>
    </form>

)

export default Search;