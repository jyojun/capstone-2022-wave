import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
// axios 추가
import axios from 'axios';
 
function App () {
 
	// 서버에서 받은 데이터를 console로 찍어서 확인한다.
  useEffect(() => {
    axios.get('/board')
      .then(res => console.log(res))
      .catch()
  })
 
  return (
    <div className="App">
      Hello React
    </div>
  )
}
 
export default App;