import React from 'react';
import './App.css';
/*
function App() {
  const name ='리액트';
  const style= {
    //background-color는 backgroudColor와 같이 -가 사라지고 카멜표기법으로 작성
    backgroundColor: 'black',
    color:'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 //px  생략시에는 default 로 지정됨 
  }
  return <div style={style}>{name}</div>;
}
*/

// style 미리 선언 안하고 싶을때
/*
function App() {
  const name ='리액트';
   
  return <div style={{
    //background-color는 backgroudColor와 같이 -가 사라지고 카멜표기법으로 작성
    backgroundColor: 'black',
    color:'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 //px  생략시에는 default 로 지정됨 
  }}>{name}</div>;
}
*/
function App() {
  const name = '리액트';

  return <div className="react">{name}</div>;
}


export default App;
