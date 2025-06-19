import mouse from "../assets/mouse.svg";
import signin from "../assets/signin.svg";
import { cssVariables } from "../helpers/cssVariables";
import { useNavigate } from "react-router-dom";

function Header() {
  const { black_81 } = cssVariables;
  const navigate = useNavigate();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
        onClick={() => navigate("/home")}
      >
        <img src={mouse} style={{ height: "34px", objectFit: "contain" }} />
        <p style={{ fontSize: "16px", fontWeight: 700, color: black_81 }}>
          foo-rum
        </p>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
        onClick={() => navigate("/signin")}
      >
        <p style={{ fontSize: "14px", fontWeight: 600, color: "black" }}>
          Login
        </p>
        <img src={signin} style={{ height: "20px", objectFit: "contain" }} />
      </div>
    </header>
  );
}

export default Header;
