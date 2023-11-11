### Styled components

```
  const css = (text, ...expressions) => {
  return (props) => {
    return expressions.reduce((acc, currVal, index) => {
      acc += text[index] + currVal(props) + text[index + 1];
      return acc;
    }, "");
  };
};

  const Div = css`
    display: flex;
    color: ${(props) => props.color};
  `;

  console.log(Div({ color: "red" }));

```
