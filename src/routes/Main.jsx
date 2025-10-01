import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.scss";
import HelloCard from "../components/HelloCard";
import InstructionCard from "../components/InstructionCard";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const texts = useMemo(
    () => ["hello world", "привет мир", "здравствуй, реальность"],
    []
  );

  const [textHello, setTextHello] = useState(texts[0]);

  const handleNext = useCallback(() => {
    setTextHello((prev) => {
      const i = texts.indexOf(prev);
      const next = texts[(i + 1) % texts.length];
      return next;
    });
  }, [texts]);

  return (
    <>
      <div className="main">
        <div className="main__container">
          <HelloCard text={textHello} onNext={handleNext} />
          <InstructionCard />
        </div>
      </div>
    </>
  );
};

export default MainPage;
