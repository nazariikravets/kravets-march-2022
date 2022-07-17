import React, {Component} from 'react';

class Comment extends Component {


    render() {
        return (
            <div>
                {this.props.item.id} --- {this.props.item.body}
            </div>
        );
    }
}

export default Comment;