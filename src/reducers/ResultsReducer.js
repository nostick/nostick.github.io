export default function reducer(state={
    results: [],
    fetched: false,
    error: null
}, action){

    switch (action.type){

        case "FETCH_IMAGES_REJECTED": {
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
        }

        case "FETCH_IMAGES_FULFILLED": {
            return {
                ...state,
                fetched: true,
                results: action.payload
            }
        }
    }

    return state;

}
