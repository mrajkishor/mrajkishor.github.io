import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import LeftPanel from './components/LeftPanel';
import About from './components/About';
import NoMatch from './components/NoMatch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact';
import Projects from './components/Projects';

import * as myConstClass from '../src/assets/blogs/ref.js';
import Blog from './components/Blog';
import Item from './components/Item';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { $ } from 'react-jquery-plugin';


import { useAudio } from '../../my-app/src/hooks/useAudio';
import AudioMp3 from '../src/assets/audio/a.mp3';

const constants = myConstClass.BLOG_DEEPLINKS;
const portfolioTags = [
  {
    "name": "Prodcuts/Services",
    "url": "products-services",
    "token": "ps"
  },
  {
    "name": "Art",
    "url": "art",
    "token": "ar"
  },
  {
    "name": "Musci",
    "url": "music",
    "token": "mu"
  },
  {
    "name": "Paper",
    "url": "papers",
    "token": "pr"
  }
];

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}




function App() {
  const [playing, toggle] = useAudio(AudioMp3);
  useEffect(() => {
    $("#loader-wrapper").fadeOut();
  }, []);



  return (
    <>
      <Desktop>

        <div className="App">
          {/* <button onClick={toggle} >{playing ? "Pause" : "Play"}</button> */}

          {/* mp3 player start */}
          {/* <div class="mp3container">
            <label >
              <input onClick={toggle} class="play-btn" type="checkbox" />

              {
                playing ?

                  <div class="pause-icon"></div>

                  :

                  <div class="play-icon"></div>

              }
            </label>



          </div> */}

          {/* mp3 player end */}



          <Router>

            <LeftPanel vp="d" />

            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/blog" element={<Content />} />
              <Route path="/portfolio" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
              {
                constants.map((thumbnail, index) => {
                  return (
                    <Route
                      path={"/blog/" + thumbnail.url}
                      element={
                        <Content blog={<Blog thumbnail={thumbnail} />} />
                      } />
                  );
                })
              }


              {getProjectsObjects()}


            </Routes>
          </Router>
        </div>
      </Desktop>

      <Tablet>
        <div className="App-t">
          <Router>
            <LeftPanel vp="t" />
            <Routes>
              <Route path="/" element={<About vp="t" />} />
              <Route path="/blog" element={<Content />} />
              <Route path="/portfolio" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
              {
                constants.map((thumbnail, index) => {
                  return (
                    <Route
                      path={"/blog/" + thumbnail.url}
                      element={
                        <Content blog={<Blog thumbnail={thumbnail} />} />
                      } />
                  );
                })
              }


              {getProjectsObjects()}


            </Routes>
          </Router>
        </div>
      </Tablet>

      <Mobile>
        <div className="App-m">

          <Router>

            <LeftPanel vp="m" />
            <Routes>
              <Route path="/" element={<About vp="m" />} />
              <Route path="/blog" element={<Content vp="m" />} />
              <Route path="/portfolio" element={<Projects vp="m" />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
              {
                constants.map((thumbnail, index) => {
                  return (
                    <Route
                      path={"/blog/" + thumbnail.url}
                      element={
                        <Content blog={<Blog thumbnail={thumbnail} vp="m" />} />
                      } />
                  );
                })
              }


              {getProjectsObjects()}


            </Routes>
          </Router>
        </div>
      </Mobile>
    </>
  );
}

const getProjectsObjects = () => {
  const obj = [];
  for (var i = 0; i < portfolioTags.length; i++) {
    obj.push(<Route
      path={"/" + portfolioTags[i].url}
      element={
        <Item tag={portfolioTags[i]} />
      } />);
  }
  return obj;
}

export default App;
