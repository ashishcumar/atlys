import React, { useState } from "react";
import { cssVariables } from "../helpers/cssVariables";
import signin from "../assets/signin.svg";
import { useNavigate } from "react-router-dom";
import { showToast, signinCombinations } from "../helpers/statics";

interface IProps {
  setOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignIn(props: IProps) {
  const { setOpenModal } = props;
  const {
    grey_2,
    box_shadow_black_5,
    black_6,
    black_48,
    black_60,
    primary,
    box_shadow_black_3,
  } = cssVariables;
  const navigate = useNavigate();
  const [creds, setCreds] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const checkCreds = () => {
    if (creds?.email?.length === 0 || creds?.password?.length === 0) {
      showToast("Please fill details", true);
      return;
    }
    if (
      signinCombinations[creds?.email as keyof typeof signinCombinations] ===
      creds?.password
    ) {
      navigate("/home");
      showToast("login success.", false);
      localStorage.setItem("isLoggedIn", "true");
      if (setOpenModal) {
        setOpenModal(false);
      }
    } else {
      showToast("invalid creds", true);
    }
  };

  return (
    <div style={{display:'grid',placeContent:'center',height:'100dvh'}}>
    <div
      style={{
        // height: "600px",
        width: "500px",
        background: grey_2,
        padding: "8px 8px 0 8px",
        borderRadius: "24px",
      }}
    >
      <div
        style={{
          background: "white",
          display: "grid",
          placeContent: "center",
          padding: "48px 24px",
          borderRadius: "24px",
          textAlign: "center",
          boxShadow: box_shadow_black_3,
        }}
      >
        <div
          style={{
            background: black_6,
            height: "54px",
            width: "54px",
            display: "grid",
            placeContent: "center",
            boxShadow: box_shadow_black_5,
            borderRadius: "50%",
            margin: "16px auto",
          }}
        >
          <img
            src={signin}
            style={{ height: "20px", objectFit: "contain", margin: "auto" }}
          />
        </div>
        <p style={{ fontSize: "20px", fontWeight: 700, color: "black" }}>
          Sign in to continue
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: black_48,
            margin: "4px 0",
          }}
        >
          Sign in to access all the features on this app
        </p>

        <div
          style={{
            marginTop: "24px",
            textAlign: "left",
            width: "350px",
          }}
        >
          <div style={{ margin: "12px auto" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "black",
                margin: "4px 0 8px 0",
              }}
            >
              Email or username
            </p>
            <input
              type="text"
              placeholder="Enter your email or username"
              value={creds?.email}
              onChange={(e) =>
                setCreds((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div style={{ margin: "12px auto" }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "black",
                margin: "4px 0 8px 0",
              }}
            >
              Password
            </p>
            <input
              type="text"
              placeholder="Enter your password"
              value={creds?.password}
              onChange={(e) =>
                setCreds((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button
            style={{
              width: "100%",
              background: "#5057EA",
              height: "48px",
              color: "white",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "600",
              marginTop: "24px",
            }}
            onClick={checkCreds}
          >
            Sign in
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          height: "48px",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: 500, color: black_60 }}>
          Do not have and account?
        </p>
        <p
          style={{ fontSize: "14px", fontWeight: 500, color: primary }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </p>
      </div>
    </div>
    </div>

  );
}

export default SignIn;
