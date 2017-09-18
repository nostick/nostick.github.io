import fire from '../Firebase';

export function fetchImages(){
    return function (dispatch) {
      fire.database().ref().orderByChild("sectionIndex")
      .on("child_added",
      snapshot => {
        dispatch({type: "FETCH_IMAGES_FULFILLED", payload: snapshot.val()});
      },
      error => {
        console.log("Error: " + error.code);
      });
    }
}
