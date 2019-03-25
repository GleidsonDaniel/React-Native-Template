const initialState = {
  player1: 0,
  player2: 0,
  name: '',
  git: null,
  game: null
};

const playReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_GAME':
      return { ...state, game: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_GIT':
      return { ...state, git: action.payload };
    case 'PLAYER_1':
      return { ...state, player1: action.payload };
    case 'PLAYER_2':
      return { ...state, player2: action.payload };
    default:
      return state;
  }
};

export default playReducer;
