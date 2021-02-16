import React from 'react';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: 'To watch'
            

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var clicked = this.state.isToggleOn == 'To Watch' ? 'Watched' : 'To Watch'
        console.log(clicked);
        this.setState({isToggleOn: clicked})
      }

    render() {
        return(
            <div> {this.props.movie.title} 
                <button 
                    onClick={this.handleClick}>
                    {this.state.isToggleOn}
                </button> 
            </div>  
        
        )
    }



}

export default MovieItem;