import React, { Component } from 'react';
import './Cards.css';
import AdvertisementService from './services/AdvertisementService';
import Navbar from './Navbar';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advType: 'Restaurant and Bars',
            Advertisements: []
        }
        this.changeAdvTypeHandler = this.changeAdvTypeHandler.bind(this);
    }

    changeAdvTypeHandler(event) {
        this.setState({ advType: event.target.value });
    }

    componentDidMount() {
        AdvertisementService.getImagesByType(this.state.advType)
            .then(res => {
                this.setState({ Advertisements: res.data });
            });

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


export default Restaurant;