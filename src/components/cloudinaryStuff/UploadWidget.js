import React, { Component } from 'react';
import { postGallery } from '../../actions/gallery'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UploadWidget extends Component {

  state = {
    galleryName: "",
    topicTags: []
  }

  uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: 'roguephoto', upload_preset: 'x1db9mny', tags: [this.state.galleryName, ...this.state.topicTags]},
      function(error, result){
        if(!error){
          console.log(result);
          this.props.postGallery(this.state.galleryName, this.state.topicTags)
        } else {
          alert(`Something went wrong!\n${error}`)
        }
      }.bind(this));
  }

  handleChange = ev => {
    this.setState({
      galleryName: ev.target.value
    })
  }

  render(){
    return (
      <div className="main">
        <h1>Upload Widget</h1>
        <div className="upload">
          <label>Gallery Name: </label>
          <input type="text" value={this.state.galleryName} onChange={this.handleChange} />
          <br />

          {this.state.galleryName.length ? <button onClick={this.uploadWidget} className="upload-button">
            Add Gallery
          </button> : null
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({postGallery}, dispatch)
}


export default connect(null, mapDispatchToProps)(UploadWidget);
