import React from 'react';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: 'To watch',
            movieDetailsClicked: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.movieDetailSelected = this.movieDetailSelected.bind(this);
        this.movieDetails = this.movieDetails.bind(this);
    }

    handleClick() {
        var clicked = this.state.isToggleOn === 'Watched' ? 'To Watch' : 'Watched'
        this.setState({isToggleOn: clicked})
        if (clicked === 'To Watch') {
            this.props.movie.watched = 0;
        } 
        if (clicked === 'Watched') {
            this.props.movie.watched = 1;
        }

    }

    movieDetailSelected() {
        this.setState({movieDetailsClicked: !this.state.movieDetailsClicked});
    }

    movieDetails() {
        if (this.state.movieDetailsClicked === true) {
            return (
                <div>
                    Year: {this.props.movie.year} <br />
                    Runtime: {this.props.movie.runtime} <br />
                    ImdbRating: {this.props.movie.rating} <br /> 
                    <button 
                        onClick={this.handleClick}>
                        {this.state.isToggleOn}
                    </button> 
                </div>
            )

        }
    }
        

    render() {
        return(
            <div className='title'> 
                <span onClick={this.movieDetailSelected}>{this.props.movie.title}</span> 
                {this.movieDetails()}
            </div>  
        )
    }



}

export default MovieItem;