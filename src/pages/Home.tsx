import { useEffect, useState } from "react";
import Card, { type ICard } from "../Components/Card";
import { cardsArr } from "../helpers/statics";
import TextEditor from "../Components/TextEditor";
import Header from "../Components/Header";
import ModalWrapper from "../Components/ModalWrapper";
import SignIn from "./SignIn";

function Home() {
  const [newPost, setNewPost] = useState<string>("");
  const [cards, setCards] = useState<ICard[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (cards?.length == 0) {
      setCards(cardsArr);
    }
    if (localStorage?.getItem("isLoggedIn") !== "true") {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [openModal]);

  return (
    <>
      <Header />
      <div style={{ display: "grid", placeContent: "center" }}>
        <TextEditor
          setNewPost={setNewPost}
          newPost={newPost}
          setCards={setCards}
        />
        {cards?.map((item) => {
          return <Card card={item} key={item.name} />;
        })}
      </div>
      <ModalWrapper isOpen={openModal}>
        <SignIn setOpenModal={setOpenModal} />
      </ModalWrapper>
    </>
  );
}

export default Home;
