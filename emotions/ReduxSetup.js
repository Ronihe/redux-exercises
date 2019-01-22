const INITIAL_STATE = {
  happy: 'ɷ◡ɷ',
  sad: '(T⌓T)',
  angry: '（♯▼皿▼）',
  confused: '(◎_◎;)',
  emotion: '(๑•̀ㅁ•́ฅ✧'
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'happy':
      //console.log(state.happy);
      return { ...state, emotion: state.happy };

    case 'sad':
      return { ...state, emotion: state.sad };
    case 'angry':
      return { ...state, emotion: state.angry };
    case 'confused':
      return { ...state, emotion: state.confused };
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);
