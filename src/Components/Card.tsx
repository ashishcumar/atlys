import { cssVariables } from "../helpers/cssVariables";
import { cardIconsArr } from "../helpers/statics";

export interface ICard {
  profile: string;
  name: string;
  time: string;
  emoji: string;
  content: string;
}

export interface IProps {
  card: ICard;
}

function Card(props: IProps) {
  const { profile, name, time, emoji, content } = props.card;
  const { black_3, border, box_shadow_black_5, black_37, grey } = cssVariables;

  return (
    <div
      style={{
        background: black_3,
        width: "650px",
        padding: "12px",
        borderRadius: "16px",
        margin: "16px 0",
      }}
    >
      <div
        style={{
          border: `1px solid ${border}`,
          borderRadius: "16px",
          width: "100%",
          background: "white",
          boxShadow: box_shadow_black_5,
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 9fr",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "grid",
              placeContent: "center",
            }}
          >
            <img
              src={profile}
              style={{ height: "40px", objectFit: "contain", margin: "auto" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "14px", fontWeight: "600" }}> {name} </p>
            <p style={{ fontSize: "12px", fontWeight: "500", color: black_37 }}>
              {" "}
              {time}{" "}
            </p>
          </div>
          <div
            style={{
              height: "40px",
              width: "40px",
              margin: "0 auto",
              display: "grid",
              placeContent: "center",
              background: grey,
              borderRadius: "50%",
              fontSize: "24px",
            }}
          >
            {emoji}
          </div>
          <div style={{ width: "100%", fontSize: "14px", fontWeight: "500" }}>
            {content}
          </div>
        </div>
      </div>
      <div
        style={{
          height: "60px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "8px",
        }}
      >
        {cardIconsArr?.map((item) => {
          return (
            <div
              style={{
                height: "24px",
                width: "24px",
              }}
            >
              <img
                src={item}
                style={{ height: "100%", objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
