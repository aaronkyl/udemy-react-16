import React, { Component } from 'react';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import { Route, NavLink } from 'react-router-dom'

import './Blog.css';

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink 
                  to="/" 
                  exact
                  activeClassName="active">Home
                </NavLink>
              </li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        {/* <section>
          <FullPost 
            postId={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;