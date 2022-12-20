import "./App.css";

import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
 const apikey = process.env.REACT_APP_NEWS_API;

  // state = {
  //   progress: 0,
  // };
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar></Navbar>
        <Routes >
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="entertainment"
                pageSize={5}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="general"
                pageSize={5}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="health"
                pageSize={5}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="science"
                pageSize={5}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="sports"
                pageSize={5}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apikey}
                key="technology"
                pageSize={5}
                country={"in"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;