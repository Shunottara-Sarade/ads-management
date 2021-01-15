import React, { Component } from 'react';
import axios from 'axios';

class UploadImage extends Component {
    constructor(props) {

        super(props);
  this.state = {
   id:'',
    image: null
  }

  this.handleChangeId = this.handleChangeId.bind(this);
  this.handleImageChange=this.handleImageChange.bind(this);
}

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   };
handleChangeId(e) {

    this.setState({ id: e.target.value });

}

//   handleImageChange = (e) => {
//     this.setState({
//       image: e.target.files[0]
//     })
//   };
handleImageChange(e){
    this.setState({image:e.target.files[0]});
}

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    let form_data = new FormData();
    form_data.append('file', this.state.image, this.state.image.name);
    // form_data.append('title', this.state.title);
    // form_data.append('content', this.state.content);
    let url = 'http://localhost:8081/springfox/api/advertisement/upload/'+ this.state.id;
    axios.put(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
      
    })
        .then(res => {
          console.log(res.data);
          alert("Image Upload Successfully");
          window.location="/dashboard";

        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='id' id='id' value={this.state.id} onChange={this.handleChangeId} required/>
          </p>
          {/* <p>
            <input type="text" placeholder='Content' id='content' value={this.state.content} onChange={this.handleChange} required/>

          </p> */}
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default UploadImage;

















// import React, { Component } from 'react';
// import AdvertisementService from './services/AdvertisementService';


// class UploadImage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             id: '',
//             advImage: ''
//         }
//         this.changeIdHandler=this.changeIdHandler.bind(this);
//         this.changeAdvImageHandler = this.changeAdvImageHandler.bind(this);
//         this.saveAdvertisement = this.saveAdvertisement.bind(this);
//     }

//     saveAdvertisement = (e) => {
//         e.preventDefault();

//         let advertisement = {
//             id: this.state.id, advImage: this.state.advImage
//         };
//         console.log(JSON.stringify(advertisement));
//         AdvertisementService.uploadImage(this.state.id).then(res=>{
//             alert("Image uploaded successfully");

//         })
        
       
            
//          this.props.history.push('/dashboard');
//     }


//     cancel() {
//         this.props.history.push('/add-advertisement');
//     }

//     changeAdvImageHandler = (event) => {
//         this.setState({ advImage: event.target.value });
//     }
//     changeIdHandler=(event)=>{
//         this.setState({id:event.target.value});
//     }

//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="card col-md-6 offset-md-3 offset-md-3">
//                             <h3 className="text-center">Add Advertisement</h3>
//                             <div className="card-body">
//                                 <fieldset>
//                                     <form>
//                                     <div className="form-group">
//                                             <label>Enter Advertisement ID</label>
//                                             <input type="text" name="id" id="id"
//                                                 className="form-control" value={this.state.id}
//                                                 onChange={this.changeIdHandler}  />
//                                         </div>

//                                         <div className="form-group">
//                                             <label>Select Image</label>
//                                             <input type="file" name="advImage" id="advImage"
//                                                 className="form-control" value={this.state.advImage} accept="image/*"
//                                                 onChange={this.changeAdvImageHandler}  />
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.saveAdvertisement}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

//                                     </form>
//                                 </fieldset>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         );
//     }
// }
// export default UploadImage;