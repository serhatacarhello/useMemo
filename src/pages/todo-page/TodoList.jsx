import { useMemo } from "react";
import { filterTodos } from "../../utils/createTodos";
import List from "./List";
import "./todo.css";

export default function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <List items={visibleTodos} />
    </div>
  );
}
