# React useMemo Hook

The React useMemo hook allows you to memoize expensive functions so that you can avoid calling them on every render.

## Usage

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

The first argument is a function that returns the value you want to memoize. The second argument is an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed.

This can improve performance by avoiding expensive computations on every render.

For example:

```jsx
const App = () => {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");

  // Only recomputed if count changes:
  const computed = useMemo(() => expensiveComputation(count), [count]);

  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>

      <input value={val} onChange={(e) => setVal(e.target.value)} />

      {computed}
    </>
  );
};
```

Here, `expensiveComputation` will only be called when `count` changes, not when `val` changes.

## Caching Objects

useMemo is also useful for caching object references between renders:

```jsx
function Component() {
  const object = useMemo(() => ({ foo: "bar" }), []);

  // object remains unchanged between re-renders

  return <div>{object.foo}</div>;
}
```

This avoids reconstructing the object on every render.

Here is an example of adding an API call using the useMemo hook:

```jsx
const App = () => {
  const [data, setData] = useState(null);

  const apiData = useMemo(() => {
    return fetchAPI("/some/api");
  }, []);

  useEffect(() => {
    setData(apiData);
  }, [apiData]);

  // ...
};

const fetchAPI = async (url) => {
  const response = await fetch(url);
  return response.json();
};
```

- `fetchAPI` makes an API call and returns the data
- We memoize it with `useMemo` so it only runs once on mount, not on every render
- Store the result in state via `useEffect`
- Now `data` will contain the API response

This avoids calling the API on every render, and lets us reuse the memoized data.

Some key points:

- The empty array `[]` means `apiData` will only be computed once
- Use `useEffect` to update state with the memoized value
- Fetching data should usually be done in `useEffect`, not `useMemo` itself

So useMemo is useful for memoizing the _preparation_ of async calls, while `useEffect` handles the async call and side effects.

## When to Use

Use memoization for expensive functions to avoid calling them on every render.

Be careful of overusing useMemo though - it can make optimization harder by isolating logic.

Good candidates are complex calculations, DOM measurements, resource intensive algorithms, etc. that take non-trivial time to compute.
