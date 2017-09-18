import axios from "axios";

export function fetchImage1(){
    return function (dispatch) {
        axios.get("https://api.unsplash.com/photos/random/?client_id=052ad597abdc5887446d31c00a12b08b4d7b34d0e6e875774c1ba39790955090")
            .then((response) => {
                dispatch({type: "FETCH_IMAGE_1_FULFILLED", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_IMAGE_1_REJECTED", payload: error});
            })
    }
}

export function fetchImage2(){
    return function (dispatch) {
        axios.get("https://api.unsplash.com/photos/random/?client_id=052ad597abdc5887446d31c00a12b08b4d7b34d0e6e875774c1ba39790955090")
            .then((response) => {
                dispatch({type: "FETCH_IMAGE_2_FULFILLED", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_IMAGE_2_REJECTED", payload: error});
            })
    }
}
