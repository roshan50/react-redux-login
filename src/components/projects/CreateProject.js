import React, {Component} from 'react';
import { connect } from 'react-redux'
import {createProject} from "../../store/actions/projectActions";

class CreateProject extends Component {
    state={
        title: '',
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container">
                <form action="" onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={this.handleChange} id="title"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-filed">
                        <button className="btn pink lighten-1 z-depth-0">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(null,mapDispatchToProps)(CreateProject);
