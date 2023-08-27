import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("user clicked lets start button");
    navigate("/usememo");
  };
  return (
    <>
      <h1>Use Memo Hook</h1>
      <div className="card">
        <button onClick={handleClick}>Let's start</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
