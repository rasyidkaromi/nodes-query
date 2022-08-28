import React, { useEffect, useContext } from 'react'
import './app.css';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { AppPages } from './pages/appPage'
import { Header } from './component/header'
import { HeadButton } from './component/headbutton'
import { StateContext } from './context/statecontext'

function App() {
  const { setHeight, refHeight } = useContext(StateContext)

  useEffect(() => {
    const body = document.body
    const html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    setHeight(height)
    document.body.style.backgroundColor = 'rgb(26, 28, 29)'

  }, [])


  return (
    <div className="App" ref={refHeight}>
      <Header />
      <HeadButton />
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<AppPages />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
