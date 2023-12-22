// import React, { useState } from "react";
// import "./novost.css";
// function Novost() {
//   const [news, setNews] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [source, setSource] = useState("");

//   const handleAddNews = () => {
//     const newNews = {
//       title: title,
//       date: new Date().toLocaleDateString(),
//       time: new Date().toLocaleTimeString(),
//       content: content,
//       image: image,
//       source: source,
//     };
//     setNews([newNews, ...news]);
//     setTitle("");
//     setContent("");
//     setImage(null);
//     setSource("");
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type='text'
//           value={title}
//           placeholder='Заголовок'
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           value={content}
//           placeholder='Содержание'
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <input type='file' onChange={handleImageChange} />
//         <input
//           type='text'
//           value={source}
//           placeholder='Источник'
//           onChange={(e) => setSource(e.target.value)}
//         />
//         <button onClick={handleAddNews}>Добавить новость</button>
//       </div>
//       <div>
//         {news.map((item, index) => (
//           <div key={index} className='news-card'>
//             <h2>{item.title}</h2>
//             <p>
//               {item.date} {item.time}
//             </p>
//             <p>{item.content}</p>
//             {item.image && (
//               <img src={URL.createObjectURL(item.image)} alt='Новость' />
//             )}
//             <p>
//               Источник:{" "}
//               <a href={`https://${item.source}`} target='_blank'>
//                 {item.source}
//               </a>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Novost;
