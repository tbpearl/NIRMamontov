// import React, { useState } from "react";
// import Menubar from "../Components/Menubar";
// import MenuToggle from "../Components/MenuToggle";
// import Navbar from "../Components/Navbar";
// import nepo1 from "../Images/nepo1.jpg";

// const News = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuToggle = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className='flex'>
//       <div
//         className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
//           showMenu ? "" : "hidden"
//         } lg:block`}
//       >
//         <Menubar />
//       </div>
//       <div className='w-3/4 h-screen'>
//         <Navbar pagename={"Новости"} />
//         <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
//         <p style={{ textAlign: "center", fontSize: "24px" }}>
//           Новости мира шахмат
//         </p>
//         <div
//           style={{
//             margin: "20px",
//             padding: "20px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             textAlign: "center", // Центрируем содержимое
//           }}
//         >
//           <h1 style={{ fontWeight: "bold" }}>
//             «ФИДЕ, наслаждайтесь последствиями». Непомнящий — о турнире с
//             участием Фируджи
//           </h1>
//           <div style={{ display: "flex", justifyContent: "center" }}>
//             <img src={nepo1} alt='Непомнящий' />
//           </div>
//           <p>{new Date().toLocaleString()}</p>
//           <p style={{ textAlign: "left" }}>
//             {" "}
//             text
//           </p>
//           <p>
//             <a
//               href='https://www.championat.com/other/news-5365752-fide-naslazhdajtes-posledstviyami-nepomnyaschij-o-turnire-s-uchastiem-firudzhi.html'
//               style={{ color: "blue", textDecoration: "underline" }}
//             >
//               championat.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import nepo1 from "../Images/nepo1.jpg";
import pict from "../Images/pict.jpg";

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      style={{
        margin: "50px",
        padding: "20px",
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
        «ФИДЕ, наслаждайтесь последствиями». Непомнящий — о турнире с участием
        Фируджи
      </h1>
      <p style={{ color: "#888" }}>{new Date().toLocaleString()}</p>
      {expanded && (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={nepo1}
              alt='Непомнящий'
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <p style={{ textAlign: "left", color: "#555" }}>
            Российский гроссмейстер Ян Непомнящий прокомментировал ситуацию с
            организацией шахматного турнира в Шартре (Франция) с участием
            Алирезы Фируджи. Ранее Международная федерация шахмат (ФИДЕ)
            выразила обеспокоенность в связи с целью проведения турнира. В
            случае удачного выступления Фируджа обойдёт в рейтинге федерации
            Уэсли Со и получит путёвку на Турнир претендентов – 2024. Непомнящий
            вспомнил ситуацию с китайскими турнирами, в которых участвовал
            гроссмейстер Дин Лижэнь, чтобы набрать необходимое количество партий
            для участия в претендентском турнире. «ФИДЕ не удосужилась хотя бы
            сделать официальное заявление по поводу китайских турниров в прошлом
            году. Теперь наслаждайтесь последствиями», — написал Непомнящий на
            своей странице в соцсетях.
          </p>
          <p>
            <a
              href='https://www.championat.com/other/news-5365752-fide-naslazhdajtes-posledstviyami-nepomnyaschij-o-turnire-s-uchastiem-firudzhi.html'
              style={{ color: "blue", textDecoration: "underline" }}
            >
              championat.com
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

const Card1 = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className='card'
      style={{
        margin: "50px",
        padding: "20px",
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
        ОАЭ примет Всемирную шахматную олимпиаду в 2028 году
      </h1>
      <p style={{ color: "#888" }}>{new Date().toLocaleString()}</p>
      {expanded && (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={pict}
              alt='ОАЭ'
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <p style={{ textAlign: "left", color: "#555", textIndent: "3em" }}>
            Всемирная шахматная олимпиада 2028 года пройдет в ОАЭ, местом
            проведения соревнований выбран Абу-Даби, сообщается в официальном
            Telegram-канале Федерации шахмат России (ФШР).{" "}
          </p>
          <p style={{ textAlign: "left", color: "#555", textIndent: "3em" }}>
            Выборы столицы турнира 2028 года прошли в воскресенье на генеральной
            ассамблее Международной шахматной федерации (FIDE), прошедшей в
            онлайн-формате. ФШР на ассамблее представлял исполнительный директор
            Александр Ткачев. За проведение соревнований в Абу-Даби
            проголосовали 96 делегатов, против - 60.{" "}
          </p>
          <p style={{ textAlign: "left", color: "#555", textIndent: "3em" }}>
            Также делегаты ассамблеи поддержали предложение отменить ограничение
            власти президента FIDE двумя сроками. Отменить данный пункт в уставе
            федерации предложила шахматная федерация Андорры, за это предложение
            проголосовали 108 делегатов, против - 27. Действующим главой FIDE
            является бывший вице-премьер правительства РФ Аркадий Дворкович.
          </p>
          <p>
            <a
              href='https://rsport.ria.ru/20231217/shakhmaty-1916370402.html'
              style={{ color: "blue", textDecoration: "underline" }}
            >
              rsport.ria.ru
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

const News = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex'>
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className='w-3/4 h-screen'>
        <Navbar pagename={"Новости"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          Новости мира шахмат
        </p>
        <Card />
        <Card1 />
      </div>
    </div>
  );
};

export default News;
