import React from "react";
import { cssVariables } from "../helpers/cssVariables";
import signin from "../assets/signin.svg";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {
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

  return (
    <div style={{ display: "grid", placeContent: "center", height: "100dvh" }}>
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
            Create an account to continue
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: black_48,
              margin: "4px 0",
            }}
          >
            Create an account to access all the features on this app
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
              <input type="text" placeholder="Enter your email or username" />
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
              <input type="text" placeholder="Enter your password" />
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
                Repeat password
              </p>
              <input type="text" placeholder="Enter your password again" />
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
            >
              Sign Up
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
            {" "}
            Already have an account?{" "}
          </p>
          <p
            style={{ fontSize: "14px", fontWeight: 500, color: primary }}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
