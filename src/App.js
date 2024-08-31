import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


  // const dummyList = [
  //   {
  //     id:1,
  //     author:"양도승",
  //     content:"하이 1",
  //     emotion:5,
  //     created_date: new Date().getTime()
  //   },
  //   {
  //     id:1,
  //     author:"홍길동",
  //     content:"하이 2",
  //     emotion:3,
  //     created_date: new Date().getTime()
  //   },
  //   {
  //     id:1,
  //     author:"염기돈",
  //     content:"하이 3",
  //     emotion:2,
  //     created_date: new Date().getTime()
  //   },
  //   {
  //     id:1,
  //     author:"양도승11",
  //     content:"하이 12",
  //     emotion:5,
  //     created_date: new Date().getTime()
  //   },
  // ];
function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  const onEdit = (targetId,newContent) => {
  setData(
    data.map((it) =>
      it.id === targetId ? {...it, content: newContent } : it
      )
    );
  };

  return(
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
    );
  }

export default App;
