import React, {Component} from 'react';

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const id = this.props.match.params.id;
        return (
           <div className="container section project-details">
               <div className="card z-depth-0">
                   <div className="card-content">
                       <div className="card-title">Project Title- {id}</div>
                       <p>jslfjdsljfdsljdfsljfdlsfsdljflsjfl</p>
                   </div>
                   <div className="card-action grey lighten-4 grey-text">
                       <div>ajdslafsdl</div>
                       <div>jsldfsldfsl</div>
                   </div>
               </div>
           </div>
        );
    }
}



export default ProjectDetails;
