import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

    index = 1;

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        console.log("PostList RENDERLIST")
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log("PostList RENDER", this.index)
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    };
}

const mapStateToProps = (state) => { // ownprops is another parameter
    return { posts: state.posts };
}

export default connect(
    mapStateToProps,
    { fetchPostsAndUsers }
)(PostList);