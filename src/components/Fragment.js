export const Frag = () => {
  const over = () => {
    console.log("mouse out event fire");
  };
  const change = (e) => {
    console.log(e.target.value);
  };
  const anchorClick = (e) => {
    e.preventDefault();
    console.log("anchor call");
  };
  return (
    <>
      <h1>this is fragment component</h1>
      <p onMouseOut={over}>this is paragraph</p>
      <input type="text" name="input" id="" onChange={change} />
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        click me
      </button>
      <a href="www.google.com" onClick={anchorClick}>
        click
      </a>
    </>
  );
};
