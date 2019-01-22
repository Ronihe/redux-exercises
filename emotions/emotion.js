window.onload = function() {
  const emotion = document.querySelector('#emotion');
  emotion.innerText = store.getState().emotion;
  document.querySelector('#happy').addEventListener('click', function() {
    store.dispatch({ type: 'happy' });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
  });

  document.querySelector('#sad').addEventListener('click', function() {
    store.dispatch({ type: 'sad' });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
  });
  document.querySelector('#angry').addEventListener('click', function() {
    store.dispatch({ type: 'angry' });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
  });

  document.querySelector('#confused').addEventListener('click', function() {
    store.dispatch({ type: 'confused' });
    const currentEmotion = store.getState().emotion;
    emotion.innerText = currentEmotion;
  });
};
