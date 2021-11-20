function close(windowKey, useState) {
  const [state, setState] = useState;
  let currentState = { ...state };
  currentState[windowKey] = false;
  currentState.pointerEvents = "";
  setState(currentState);
}

export default close;
