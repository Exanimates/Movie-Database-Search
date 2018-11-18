import React from 'react'
import {ListGroupItem} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
      }
    render(){
        return <ListGroupItem header={this.props.movie.title} key = {this.props.movie.id}>
                    <img alt="poster" width="120" src={this.props.movie.poster_src}/>
                    <p>{this.props.movie.overview}</p>
                    <Button onClick={this.viewMovie.bind(this)}>View</Button>    
                </ListGroupItem>
    }
}

export default MovieRow