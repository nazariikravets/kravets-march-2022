import React, {Component} from 'react';

import {ServiceApiComments} from "../../service";
import Comment from "../comment/Comment";

class Comments extends Component {


    state={comment:[]}



    componentDidMount() {
    this.serviceApiComments=new ServiceApiComments()
        this.serviceApiComments.getComments().then(value => this.setState({comment: value}));
    }

    render() {
        return (
            <div>
                {this.state.comment.map(value => <Comment item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default Comments;