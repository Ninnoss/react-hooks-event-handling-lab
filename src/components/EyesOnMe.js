// Code EyesOnMe Component Here
function EyesOnMe() {
  function handleFocus() {
    console.log('Good!');
  }

  function hanldeBlur() {
    console.log('Hey! Eyes on me!');
  }
  return (
    <button onFocus={handleFocus} onBlur={hanldeBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
