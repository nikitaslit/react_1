import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.scss";
import HelloCard from "../components/HelloCard";
import InstructionCard from "../components/InstructionCard";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [login,setLogin] = useState("Admin");
  const [password, setPassword] = useState("Admin")

  const [showLogin,setShowLogin]=useState("");
  const [showPassword,setShowPassword]=useState("");

  const texts = useMemo(
    () => ["чего вы больше всего боитесь в программированиии", "привет мир", "здравствуй, реальность"],
    []
  );
  const sendData= () =>{
    setShowLogin(login);
    setShowPassword(password);
  }

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
          <div>
            <div>Твои данные</div>
            <div>{showLogin}/{showPassword}</div> 
            <input value={login} onChange={(e) => setLogin(e.target.value)}></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <div><button onClick={()=>{sendData()}} className="btn">отправить </button></div>
          </div>
          <HelloCard text={textHello} onNext={handleNext} />
          <InstructionCard />
        </div>
      </div>
    </>
  );
};

export default MainPage;
