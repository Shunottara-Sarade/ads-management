import axios from 'axios';

const Advertisement_API_BASE_URL = "http://localhost:8081/springfox/api/advertisement";

class AdvertisementService {
    getAdvertisement(){
        return axios.get(Advertisement_API_BASE_URL+'/');
    }

    createAdvertisement(advertisement){
        return axios.post(Advertisement_API_BASE_URL+'/',advertisement);
    }

    getAdvertisementById(Id){
        return axios.get(Advertisement_API_BASE_URL+'/'+Id);
    }

    updateAdvertisement(advertisement, Id){
        return axios.put(Advertisement_API_BASE_URL+'/'+Id,advertisement);
    }

    deleteAdvertisement(Id){
        return axios.delete(Advertisement_API_BASE_URL+'/'+Id);
    }
}

//exporting AdvertisementService object
export default new AdvertisementService();