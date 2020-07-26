import React from 'react';
//to connect this app conponent to the store
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import PropTypes from 'prop-types';


//import postslists
import { PostsList } from './';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }


  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-nav">
            <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="logo" />
          </div>
          <div className="search-container">
            <img className="search-icon" src="https://image.flaticon.com/icons/svg/483/483356.svg" alt="search-icon" />
            <input placeholder="Search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="user-dp" />
                </li>
                <span>John Doe</span>
              </ul>

            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp" />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Login</li>
                <li>Logout</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {
    posts: state.posts,
  }

}


App.propTypes = {
  posts: PropTypes.array.isRequired
}
export default connect(mapStateToProps)(App);

