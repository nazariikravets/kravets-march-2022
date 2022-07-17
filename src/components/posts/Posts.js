import React, {Component} from 'react';

import {ServiceApiPosts} from "../../service";
import Post from "../post/Post";

class Posts extends Component {

    state={posts:[]}

    componentDidMount() {
        this.serviceApiPosts=new ServiceApiPosts()
        this.serviceApiPosts.getPosts().then(value => this.setState({posts:value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default Posts;