import React, { Component } from 'react';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
// import FullPost from './FullPost/FullPost'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

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
                  activeClassName="active">Posts
                </NavLink>
              </li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Redirect from="/posts" to="/" />
          <Route path="/" component={Posts} />
        </Switch>
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