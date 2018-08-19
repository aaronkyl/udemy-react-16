import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import axios from '../../../axios'
import './Posts.css'

class Posts extends Component {
  state = {
    posts: [],
    error: false
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map(post => {
          return {...post, author: 'Max'}
        })
        this.setState({posts: updatedPosts})
      })
      .catch(error => {
        this.setState({error: true})
      })
  }

  postSelectedHandler(postId) {
    this.props.history.push('/' + postId)
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/' + post.id} key={post.id}>
            <Post 
              key={post.id} 
              clicked={() => this.postSelectedHandler(post.id)}
              title={post.title} 
              author={post.author} />
          // </Link> 
        )
      })
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path="/:postId" component={FullPost} />
      </div>
    )
  }
}

export default Posts