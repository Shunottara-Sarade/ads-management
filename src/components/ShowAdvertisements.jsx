import React, { Component } from 'react';
import AdvertisementService from './services/AdvertisementService';
import dateFormat from 'dateformat';
import './Cards.css';
import Navbar from './Navbar';
import '../css/ViewAds.css';
class ShowAdvertisements extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            Advertisements: []
        }


    }

    componentDidMount() {
        AdvertisementService.getAdvertisement()
            .then((res) => {
                this.setState({ Advertisements: res.data });
            });

    }



    dateFormatHandler = (startDate) => {
        return dateFormat(startDate, "dd-mm-yyyy");
    }

    render() {
        return (

            <div>
                <Navbar />



                <div class="container">
                    <div class="row">
                        {
                            this.state.Advertisements.map(
                                advertisement =>
                                    <tr key={advertisement.id}>
                                        <img class="img-responsive" src={advertisement.link} alt="ads"
                                            style={{ marginLeft: "50px" }} width="230px" height="250px"></img>
                                        <h4 className="text" style={{ marginLeft: "50px" }}>Category : {advertisement.advType}</h4>
                                        <h4 className="text" style={{ marginLeft: "50px" }}>Location : {advertisement.advLocation}</h4>
                                    </tr>
                            )
                        }


                    </div>
                </div>
            </div>


        );
    }
}


export default ShowAdvertisements;