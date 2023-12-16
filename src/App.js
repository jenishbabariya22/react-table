import logo from './logo.svg';
import './App.css';
import Record from './Record';
import { useEffect, useState } from 'react';
const App = () => {
  const [allrecord, setAllRecord] = useState([
    {
      id: 1,
      name: "samsung",
      price: 1000,
      qty: 1,
      category: "mobile",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGrWLGFZBjHHAFlcd2sSvwEX9qbKTWyRMyaK_xaQj8HpIuuAzmFPIgl_XOFapgzVUku3acrTBd9Bot3OWt0EFS-9EYIpxXOoc0OyJShPRX2b_QJ38ZP-WOpRvG0dmxTWOGN5-TuVZPqdU6&usqp=CAc",
      color: "#adadad",
      text: "white"
    },
    {
      id: 2,
      name: "t.v",
      price: 500,
      qty: 1,
      category: "electronics",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRoe2KfNJo2lLlKW4dLdQ5Xzez3R42vPXjc3d-lAJLnmajss1FZCmaj-rr7q3NfeY2n5v0AcZ1qBjwQ_EtH_uI3fPpshwYAcjIaLF2rGL3RePVZxk0o4KieVdFEZIHQgWpmmwpSXtqZg&usqp=CAc",
      color: "#d6d6d6"
    },
    {
      id: 3,
      name: "washing machine",
      price: 250,
      qty: 1,
      category: "electronics",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcllUCjOu-eL1Q26TvMrPB-a6xsK_K5j3foF1xRGHGjEArlSD8Mv971iLEE0yOObiHVycbUGqXbnUfujAIc7Hbl62z6nzuA3Mx0JmopOyJ61gQ6CWn98Hx",
      color: "#adadad",
      text: "white"
    },
    {
      id: 4,
      name: "vivo",
      price: 100,
      qty: 1,
      category: "mobile",
      img: "https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "#d6d6d6"
    },
    {
      id: 5,
      name: "puma",
      price: 50,
      qty: 1,
      category: "cloth",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQQ3Mewjwz9QYRvlMVeYnE6Lr2WklARqFLA&usqp=CAU",
      color: "#adadad",
      text: "white"
    },
    {
      id: 6,
      name: "cotton",
      price: 20,
      qty: 1,
      category: "cloth",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eLmlij1dMcLuiGznWiNSTBgC3VL-DQhDnQ&usqp=CAU',
      color: "#d6d6d6"
    },
    {
      id: 7,
      name: "oppo",
      price: 400,
      qty: 1,
      category: "mobile",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJHwX0nSfPZEu6Pnc0ecbqs5J035ZhJEpuw&usqp=CAU",
      color: "#adadad",
      text: "white"
    },
    {
      id: 8,
      name: "gujarati",
      price: 150,
      qty: 1,
      category: "food",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oYtFzhSw5j_sGbHdosqvS2kNmTLpJ8sRNA&usqp=CAU",
      color: "#d6d6d6"
    },
    {
      id: 9,
      name: "punjabi",
      price: 100,
      qty: 1,
      category: "food",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD7sd_BbkgvPVUAnuHgBAqRvKcNcyoafYog&usqp=CAU",
      color: "#adadad",
      text: "white"
    },
  ]);

  const [filter, setFilter] = useState([]);

  const handleClick = (category) => {
    let oldrecord = [...allrecord];

    if (category === "all") {
      setFilter(allrecord)
    } else {
      oldrecord = allrecord.filter((item) => {
        return item.category === category
      })
      setFilter(oldrecord)
    }
  }

  useEffect(() => {
    setFilter(allrecord)
  }, [])
  return (
    <>
      <Record
        allrecorddata={filter}
        btnclick={handleClick}
        setAllRecord={setAllRecord}
      />
    </>
  )
};
export default App;