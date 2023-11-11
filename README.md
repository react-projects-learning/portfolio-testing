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

### Routing

- we are using nesting here for "/work" route

```
  <Route path="/work">
    <Route index element={<Work />}>
    <Route path=":id" element={<MovieDetail />}>
  </Route>
```

- then in MovieDetail component to access the `id param`
- we will be using `useParam` hook from `react-router-dom` => `const {id} = useParam()`
