import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UseMemoPage() {
  const navigate = useNavigate();

  const [val, setVal] = useState(null);
  const [val1, setVal1] = useState(null);

  const fact = useMemo(() => {
    return factFunc(val);
  }, [val]);

  useEffect(() => {
    if (fact !== null && fact > 100) {
      const result = window.confirm("Would you like to change page => todos ?");
      if (result) {
        navigate("/todos");
      }
    }
  }, [fact, navigate]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div>Val: {val} </div>

      <label htmlFor="factorial">Factorial Func</label>
      <input
        id="factorial"
        type="number"
        onChange={(e) => setVal(parseInt(e.target.value))}
      />

      <div>
        Factorial Func Result: ({val})! = {fact}{" "}
      </div>

      <button onClick={() => setVal1(parseInt(val) + 1)}>Render</button>
      <div>
        Val1:({val}) + 1 = {val1}{" "}
      </div>
    </div>
  );
}

const factFunc = (number) => {
  console.log("fact func run");
  return number <= 1 ? 1 : number * factFunc(number - 1);
};
