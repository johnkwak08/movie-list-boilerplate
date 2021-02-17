import React from 'react';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: 'To watch',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var clicked = this.state.isToggleOn === 'Watched' ? 'To Watch' : 'Watched'
        this.setState({isToggleOn: clicked})
        if (clicked === 'To Watch') {
            this.props.movie.watched = false;
        } 
        if (clicked === 'Watched') {
            this.props.movie.watched = true;
        }
        // this.props.onToWatchedClick(this.props.movie);
        // this.props.onWatchedClick(this.props.movie);

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