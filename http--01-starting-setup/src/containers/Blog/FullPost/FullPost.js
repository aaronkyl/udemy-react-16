import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadData()
    }

    componentDidUpdate() {
        this.loadData()
    }

    loadData() {
        if (this.props.match.params.postId) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.props.match.params.postId != this.state.loadedPost.id)) {
                axios.get('/posts/' + this.props.match.params.postId)
                    .then(response => {
                        this.setState({loadedPost: response.data})
                    })
            }
        }
    }

    deletePost = () => {
        axios.delete('/posts/' + this.state.loadedPost.id)
            .then(response => console.log(response))
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>
        if (this.props.match.params.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;