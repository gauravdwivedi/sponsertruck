import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PostsList extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div>
                <div className="posts-list">
                    {posts.map(post => (
                        <div className="post-wrapper" key={post._id}>
                            <div className="post-header">
                                <div className="post-avatar">
                                    <img src="https://image.flaticon.com/icons/svg/2154/2154651" alt="user-pic" />

                                    <div>
                                        <span className="post-author">{post.user.name}</span>
                                        <span className="post-time">a minute ago</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <div className="post-like">
                                        <img src="https://image.flaticon.com/icons/svg/1077/1077035.svg" alt="likes-icon" />
                                        <span>{post.likes.length}</span>
                                    </div>
                                    <div className="post-comments-icon">
                                        <img src="https://image.flaticon.com/icons/svg/1380/1280338.svg" alt="comments-section" />
                                        <span>{post.comments.length}</span>
                                    </div>
                                </div>
                                <div className="post-comment-box">
                                    <input placeholder="Start typing a comment" />
                                </div>
                                <div className="post-comments-list">
                                    <div className="post-comment-item">
                                        <div className="post-comment-header">
                                            <span className="post-comment-author">Bill</span>
                                            <span className="post-comment-time"> a minute ago</span>
                                            <span className="post-comment-likes">22</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PostsList;