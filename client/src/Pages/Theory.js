import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import benoni from "../Images/benoni.png";

const Opening2 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      style={{
        margin: "50px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <h1 style={{ fontWeight: "bold", color: "#333" }}>Русская партия</h1>

      {expanded && (
        <div>
          <div style={{ textAlign: "left", color: "#555" }}></div>
        </div>
      )}
    </div>
  );
};

const Opening3 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      style={{
        margin: "50px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <h1 style={{ fontWeight: "bold", color: "#333" }}>
        Сицилианская защита. Вариант дракона.
      </h1>

      {expanded && (
        <div>
          <div style={{ textAlign: "left", color: "#555" }}></div>
        </div>
      )}
    </div>
  );
};

const Opening4 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      style={{
        margin: "50px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <h1 style={{ fontWeight: "bold", color: "#333" }}>Защита Нимцовича</h1>

      {expanded && (
        <div>
          <div style={{ textAlign: "left", color: "#555" }}></div>
        </div>
      )}
    </div>
  );
};

const Opening5 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      style={{
        margin: "50px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <h1 style={{ fontWeight: "bold", color: "#333" }}>
        Староиндийское начало
      </h1>

      {expanded && (
        <div>
          <div style={{ textAlign: "left", color: "#555" }}></div>
        </div>
      )}
    </div>
  );
};

const Opening1 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      style={{
        margin: "50px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <h1 style={{ fontWeight: "bold", color: "#333" }}>Защита Бенони</h1>

      {expanded && (
        <div>
          <div style={{ textAlign: "left", color: "#555" }}>
            Защита Бенони — дебют, имеющий две характерные системы. Первая
            система, защита Модерн-Бенони, начинается ходами: <br />
            1. d2-d4 Kg8-f6
            <br />
            2. c2-c4 c7-c5
            <br />
            3. d4-d5
            <br />
            Вторая, классическая защита Бенони: 1. d2-d4 c7-c5 <br />
            Относится к полузакрытым началам. <br />
            Различают т. н. Модерн-Бенони (когда чёрные разменивают пешку е на
            белую с и строят свою игру преимущественно на ферзевом фланге.
            Современная схема, более острая и более популярная) и закрытые схемы
            (когда чёрные запирают центр пешками e5-d6-с5 и ловят момент, чтобы
            вскрыть игру на одном из флангов, либо на королевском посредством
            f5, либо на ферзевом — в зависимости от рокировки белых). <br />
            Модерн-Бенони является одной из самых острых защит в шахматах и
            ведет к чрезвычайно сложной тактической игре. Белые имеют перевес в
            центре, чёрные инициативу на ферзевом фланге. <br />
            Защита Бенони была одной из любимых защит Михаила Таля. Среди
            современных шахматистов высокого уровня эта защита в арсенале у
            Вугара Гашимова, а также у Веселина Топалова и Василия Иванчука.
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={benoni}
              alt='Benoni'
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Theory = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex'>
      <div
        className={`w-1/4 h-auto bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className='w-full h-screen'>
        <Navbar pagename={"Шахматная теория"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <Opening2 />
        <Opening1 />
        <Opening3 />
        <Opening4 />
        <Opening5 />
      </div>
    </div>
  );
};

export default Theory;
