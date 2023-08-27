import { memo } from "react";

const List = memo(function ListComponent({ items }) {
  let startTime = performance.now();

  while (performance.now() - startTime < 500)
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.completed ? <s>{item.text} </s> : item.text}
          </li>
        ))}
      </ul>
    );
});

export default List;
