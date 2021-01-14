import React, { Component } from 'react';
import AdvertisementService from '../services/AdvertisementService';
import dateFormat from 'dateformat';


class ListAdvertisementComponent extends Component
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            Advertisements: []
        }
        this.addAdvertisement = this.addAdvertisement.bind(this);
    }
    
    componentDidMount()
    {
        AdvertisementService.getAdvertisement()
        .then((res) => 
        {
            this.setState({Advertisements: res.data});
        });
    }

    addAdvertisement()
    {

        this.props.history.push('/add-advertisement');       
    }

    dateFormatHandler = (startDate) =>
    {
        return dateFormat(startDate, "dd-mm-yyyy");
    } 

    render() {
        return (
            <div>
                <h2 className="text-center">Advertisement List</h2>
                <div className="container">
                    <button className="btn btn-primary" onClick={this.addAdvertisement}>Add Advertisement</button>
                </div>
                <div className="container ">
                    <table className="table table-striped table-bordered table-hover ">
                        <thead className="thead-dark">
                            <tr>                                
                                <th>Advertisement Id</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Created By</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.Advertisements.map(
                                    advertisement => 
                                    <tr key= {advertisement.id}>
                                        <td>{advertisement.id}</td>
                                        <td>{advertisement.advLocation}</td>
                                        <td>{advertisement.advType}</td>
                                        <td>{advertisement.createdBy}</td>
                                        <td>{this.dateFormatHandler(advertisement.startDate)}</td>
                                        <td>{this.dateFormatHandler(advertisement.endDate)}</td>
                                        
                                     </tr>  
                                )
                            }


                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}

export default ListAdvertisementComponent;