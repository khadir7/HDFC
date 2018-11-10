import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactTable from "react-table";
import columns from "../columns";
import 'react-table/react-table.css';
import '../App.css';
import * as actions from "../actions";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
    this.searchProjects = this.searchProjects.bind(this);
    this.myRef = React.createRef();
  }
  
  componentWillMount(){
    this.props.fetchProjects()
  }

  componentWillReceiveProps(props){
    if(props.data.length){
      this.setState({
        data: props.data
      })
    }
  }

  searchProjects(){
    let input = this.myRef.current.value,
        newData=[];

    newData = this.props.data.filter((obj,i) => {
      return obj.blurb.toUpperCase().indexOf(input.toUpperCase()) !== -1; 
    })
    this.setState({
      data: newData
    })
  }
  render() {
    const {data} = this.state;

    if(!data){
      return null;
    }

    return (
      <div>
        <div className="search">
          <input ref={this.myRef} onKeyUp={this.searchProjects} type="text" placeholder="Search via name.." name="search"/>
          <button type="submit" onClick={this.searchProjects}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <ReactTable
          data={data}
          columns={columns}
        />    
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: (state.projects && state.projects.projectData) || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => {
      return actions.fetchProjects(dispatch);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



