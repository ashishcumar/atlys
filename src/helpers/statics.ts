import heart from "../assets/heart.svg";
import send2 from "../assets/send2.svg";
import commentText from "../assets/commentText.svg";
import jane from "../assets/jane.svg";
import john from "../assets/john.svg";
import theresa from "../assets/theresa.svg";

export const cardIconsArr = [heart, commentText, send2];

export const cardsArr = [
  {
    profile: theresa,
    name: "Theresa Webb",
    time: "5 mins ago",
    emoji: "🥴",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    profile: john,
    name: "John Doe",
    time: "5 mins ago",
    emoji: "🤞",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    profile: jane,
    name: "Jane Doe",
    time: "5 mins ago",
    emoji: "💀",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const signinCombinations = {
  "demo@example.com": "password123",
  "test@user.com": "testpass",
};

export const showToast = (message: string, isError: boolean) => {
  const div = document.createElement("div");
  div.innerText = message;
  Object.assign(div.style, {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    backgroundColor: isError ? "#DC2626" : "#0d9488",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "14px",
    zIndex: 9999,
  });

  document.body.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
};