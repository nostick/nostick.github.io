import { combineReducers } from "redux"

import images from "./ImagesReducer"
import results from './ResultsReducer'

export default combineReducers({
    images, results
})
