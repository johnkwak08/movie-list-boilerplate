import React from 'react';

const Add = (props) => (
  <form onSubmit={props.handleAddSubmit}>
      <label>
        <input type='text' 
        placeholder='Add movie title here'
        value={props.values}
        onChange={props.handleAddChange}
        />
      </label>
      <button>
        Add
      </button>
  </form>
)

  

export default Add; 