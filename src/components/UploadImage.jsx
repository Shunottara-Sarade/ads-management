import React, { Component } from 'react';


class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            advImage: ''
        }
        this.changeAdvImageHandler = this.changeAdvImageHandler.bind(this);
        this.saveAdvertisement = this.saveAdvertisement.bind(this);
    }

    saveAdvertisement = (e) => {
        e.preventDefault();

        let advertisement = {
            id: null, advImage: this.state.advImage
        };
        console.log(JSON.stringify(advertisement));
        
        alert("Image uploaded successfully");
            
         this.props.history.push('/advertisement');
    }


    cancel() {
        this.props.history.push('/add-advertisement');
    }

    changeAdvImageHandler = (event) => {
        this.setState({ advImage: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Advertisement</h3>
                            <div className="card-body">
                                <fieldset>
                                    <form>

                                        <div className="form-group">
                                            <label>Select Image</label>
                                            <input type="file" name="advImage" id="advImage"
                                                className="form-control" value={this.state.advImage} accept="image/*"
                                                onChange={this.changeAdvImageHandler}  />
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveAdvertisement}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                    </form>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default UploadImage;