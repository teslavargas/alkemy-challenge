import {
  GET_HERO,
  GET_DETAIL,
  ADD_TO_MY_TEAM,
  REMOVE_FROM_MY_TEAM,
} from "../actions/actions";

const initialState = {
  heros: [],
  team: [],
  teamAlignment: {
    good: 0,
    bad: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO:
      return {
        ...state,
        heros: [action.payload],
      };

    case GET_DETAIL:
      return {
        ...state,
        country: action.payload,
      };

    case ADD_TO_MY_TEAM:
      const addAlignment = action.payload.biography.alignment;
      return {
        ...state,
        team: state.team.concat(action.payload),
        teamAlignment: {
          ...state.teamAlignment,
          [addAlignment]: state.teamAlignment[addAlignment] + 1,
        },
      };

    case REMOVE_FROM_MY_TEAM:
      const removeAlignment = action.payload.biography.alignment;
      return {
        ...state,
        teamAlignment: {
          ...state.teamAlignment,
          [removeAlignment]: state.teamAlignment[removeAlignment] - 1,
        },
        team: state.team.filter((h) => h.id !== action.payload.id),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
