import React, { Component } from 'react';

class Course extends Component {
    state = {
        id: null,
        title: null
    }
    componentDidMount() {
        this.getQueryParams()
    }

    componentDidUpdate() {
        if (this.props.match.params.id) {
            if (!this.state.id || this.state.id != this.props.match.params.id) {
                console.log('getting params')
                this.getQueryParams()
            }
        }
    }
     
    getQueryParams() {
        const query = new URLSearchParams(this.props.location.search);
        this.setState({id: this.props.match.params.id, title: query.get('title')})
    }

    render () {
        console.log('rendering course', this.props)
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;