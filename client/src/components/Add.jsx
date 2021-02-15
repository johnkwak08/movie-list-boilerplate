import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState = {add: event.target.value};
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addMovies(this.state.input);
  }

  render() {
    return(
      <form>
          <label>
            <input type='text' 
            placeholder='Add movie title here'
            add={this.state.value}
            onChange={this.handleChange}
            />
          </label>
          <button>
            Add
          </button>
      </form>
    )
  }
}
  

export default Add; 