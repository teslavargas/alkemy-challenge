import axios from "axios";

export const GET_HERO = "GET_HERO";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_TO_MY_TEAM = "ADD_TO_MY_TEAM";
export const REMOVE_FROM_MY_TEAM = "REMOVE_FROM_MY_TEAM";

export function getHero(name) {
  return function (dispatch) {
    return axios
      .get(`https://superheroapi.com/api/1155198634989290/search/${name}`)
      .then((response) => {
        dispatch({
          type: GET_HERO,
          payload: response.data,
        });
      })
      .catch((response) => {
        dispatch({
          type: GET_HERO,
          payload: response.data,
        });
      });
  };
}

export function getHeroDetail(id) {
  return function (dispatch) {
    return axios
      .get(`https://superheroapi.com/api/1155198634989290/${id}`)
      .then((response) => {
        dispatch({
          type: GET_DETAIL,
          payload: response.data,
        });
      });
  };
}

export function addToMyTeam(payload) {
  return {
    type: ADD_TO_MY_TEAM,
    payload,
  };
}

export function removeFromMyTeam(payload) {
  return { type: REMOVE_FROM_MY_TEAM, payload };
}
