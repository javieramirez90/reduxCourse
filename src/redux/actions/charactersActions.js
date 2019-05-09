import Axios from "axios";

// 1.-const
export let GET_CHARACTERS_BEGIN = "GET_CHARACTERS_BEGIN"
export let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
export let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

// 2.- Action creator
function getCharactersBegin(){
  return {
    type: GET_CHARACTERS_BEGIN
  }
}

function getCharactersSuccess(payload){
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload
  }
}

function getCharactersError(){
  return {
    type: GET_CHARACTERS_ERROR
  }
}
// 3.-Thunks

export const onGetCharacters = () => (dispatch, getState) => {

  let next = getState().characters.next
  let alreadyHere = Object.keys(getState().characters.chars).length
  //aquí irán validaciones como si ya alcanzamos todos los items o si ya la pedí
  dispatch(getCharactersBegin())
  return Axios
    .get(next)
    .then(res => {
      let payload = {
        chars: res.data.results,
        fetched: alreadyHere + res.data.results.length,
        prev: next,
        next: res.data.info.next,
        count: res.data.info.count,
        currentPage: next.split("=")[1] || 1
      }
    dispatch(getCharactersSuccess(payload))
  })
  .catch(err =>{
    dispatch(getCharactersError())//Lo mejor sería cachar el error y gusrdarlo en el store
  })
}