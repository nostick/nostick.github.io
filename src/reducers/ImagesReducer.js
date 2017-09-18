export default function reducer(state={
    image1: null,
    image2: null,
    fetched: false,
    error: null
}, action){

    switch (action.type){

        case "FETCH_IMAGE_1_REJECTED": {
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
        }

        case "FETCH_IMAGE_1_FULFILLED": {
            return {
                ...state,
                fetched: true,
                image1: action.payload
            }
        }

        case "FETCH_IMAGE_2_REJECTED": {
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
        }

        case "FETCH_IMAGE_2_FULFILLED": {
            return {
                ...state,
                fetched: true,
                image2: action.payload
            }
        }

    }

    return state;

}
