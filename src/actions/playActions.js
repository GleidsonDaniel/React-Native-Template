export const playGame = data => dispatch => {
  dispatch([
    {
      type: 'PLAY_GAME',
      payload: data
    }
  ]);
};

export const setName = data => dispatch => {
  dispatch([
    {
      type: 'SET_NAME',
      payload: data
    }
  ]);
};

export const getGit = () => (dispatch, getState) => {
  const state = getState();
  const res = '';
  dispatch([
    {
      type: 'SET_GIT',
      payload: res
    }
  ]);
};

export const player1 = data => dispatch => {
  dispatch([
    {
      type: 'PLAYER_1',
      payload: data
    }
  ]);
};

export const player2 = data => dispatch => {
  dispatch([
    {
      type: 'PLAYER_2',
      payload: data
    }
  ]);
};
