import React from "react";
import { cssVariables } from "../helpers/cssVariables";
import trash from "../assets/trash.svg";
import chevrondown from "../assets/chevrondown.svg";
import textbold from "../assets/textbold.svg";
import textitalic from "../assets/textitalic.svg";
import textunderline from "../assets/textunderline.svg";
import listordered from "../assets/listordered.svg";
import listunordered from "../assets/listunordered.svg";
import quotes from "../assets/quotes.svg";
import script from "../assets/script.svg";
import smile2 from "../assets/smile2.svg";
import plus from "../assets/plus.svg";
import mic from "../assets/mic.svg";
import videocamera from "../assets/videocamera.svg";
import send from "../assets/send.svg";
import type { ICard } from "./Card";
import jane from "../assets/jane.svg";
import { showToast } from "../helpers/statics";

interface IProps {
  setNewPost: React.Dispatch<React.SetStateAction<string>>;
  newPost: string;
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

function TextEditor(props: IProps) {
  const { newPost, setNewPost, setCards } = props;
  const {
    black_3,
    border,
    box_shadow_black_5,
    red_15,
    black_81,
    box_shadow_black_9,
    black_40,
    black_6,
  } = cssVariables;

  const addToCards = () => {
    if (newPost.length == 0) {
      showToast("please enter the content.", true);
      return;
    }
    const card = {
      profile: jane,
      name: "Test user",
      time: "0 Sec ago",
      emoji: "🥴",
      content: newPost,
    };
    setCards((prev) => [card, ...prev]);
    setNewPost("");
    showToast("Data saved successfully!", false);
  };

  return (
    <div
      style={{
        background: black_3,
        width: "650px",
        padding: "12px",
        borderRadius: "16px",
        margin: "24px 0",
      }}
    >
      <div
        style={{
          border: `1px solid ${border}`,
          borderRadius: "16px",
          width: "100%",
          background: "white",
          boxShadow: box_shadow_black_5,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
          }}
          onClick={() => showToast("functionality not added.", true)}
        >
          <div
            style={{
              background: black_3,
              padding: "4px 8px",
              display: "flex",
              justifyContent: "space-evenly",
              gap: "12px",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                background: "white",
                padding: "8px 12px",
                borderRadius: "8px",
                boxShadow: box_shadow_black_9,
              }}
            >
              <p
                style={{ fontSize: "12px", fontWeight: "500", color: black_81 }}
              >
                Paragraph
              </p>{" "}
              <img
                src={chevrondown}
                style={{ height: "12px", objectFit: "contain" }}
              />{" "}
            </div>

            <div
              style={{
                background: "white",
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
                boxShadow: box_shadow_black_9,
                borderRadius: "8px",
              }}
            >
              <img
                src={textbold}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
              }}
            >
              <img
                src={textitalic}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
              }}
            >
              <img
                src={textunderline}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <hr style={{ height: "40px" }} />
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
              }}
            >
              <img
                src={listordered}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
              }}
            >
              <img
                src={listunordered}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <hr style={{ height: "40px" }} />
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
              }}
            >
              <img
                src={quotes}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
              }}
            >
              <img
                src={script}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
          </div>
          <div
            style={{
              height: "40px",
              width: "40px",
              background: red_15,
              borderRadius: "12px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <img src={trash} style={{ height: "18px", objectFit: "contain" }} />
          </div>
        </div>
        <div
          style={{
            padding: "8px 16px",
            display: "flex",
            gap: "12px",
            alignItems: "start",
            height: "100px",
            overflow: "scroll",
          }}
        >
          <img src={smile2} style={{ height: "18px", objectFit: "contain" }} />
          <textarea
            placeholder="How are you feeling today?"
            style={{
              color: black_40,
              fontSize: "14px",
              fontWeight: 500,
              background: "white",
              height: "100%",
              border: "none",
              outline: "none",
              width: "100%",
            }}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <hr style={{ borderTop: `1px solid ${border}` }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 16px 12px 16px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            onClick={() => showToast("functionality not added.", true)}
          >
            <div
              style={{
                background: black_6,
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
                boxShadow: box_shadow_black_5,
                borderRadius: "8px",
              }}
            >
              <img
                src={plus}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
                borderRadius: "8px",
              }}
            >
              <img
                src={mic}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
            <div
              style={{
                height: "32px",
                width: "32px",
                display: "grid",
                placeContent: "center",
                borderRadius: "8px",
              }}
            >
              <img
                src={videocamera}
                style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              placeContent: "center",
              height: "32px",
              width: "32px",
              borderRadius: "8px",
            }}
            onClick={addToCards}
          >
            <img
              src={send}
              style={{ height: "16px", objectFit: "contain", margin: "aut0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
