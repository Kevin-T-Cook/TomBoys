import axios from "axios";

const BASE_URL = "http://localhost:8080";

const GET_CABINS = "GET_CABINS";
const GET_CAMPSITES = "GET_CAMPSITES";
const GET_RENTALS = "GET_RENTALS";

const getCabins = (cabins) => ({
    type: GET_CABINS,
    payload: cabins,
});

const getCampsites = (campsites) => ({
    type: GET_CAMPSITES,
    payload: campsites,
});

const getRentals = (rentals) => ({
    type: GET_RENTALS,
    payload: rentals,
});


// GET ALL CABINS
export const getCabinsThunk = () => async (dispatch) => {
    try {
        const { data: cabins } = await axios.get(`${BASE_URL}/api/cabins`);
        return dispatch(getCabins(cabins));
    } catch (error) {
        console.error(error);
    }
}

// GET ALL CAMPSITES

// GET RENTALS