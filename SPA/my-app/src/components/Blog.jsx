import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import '../assets/css/Blog.scss';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BackBtn from './buttons/BackBtn';
import Highlight from 'react-highlight'
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css'; // Import dark theme CSS


Blog.propTypes = {

};
function Blog(props) {
  const navigate = useNavigate();

  const [MDContent, setMDContent] = useState(``);




  useEffect(() => {
    let id = props.thumbnail.id;
    //fetch from assets/markdown folder
    const mdFolder = process.env.PUBLIC_URL + '/markdown/' + id + '.md';
    fetch(mdFolder)
      .then(r => r.text())
      .then(text => {
        setMDContent(text);
      });
    console.log(props);
  }, []);

  function handleGoback() {
    navigate("/blog/");
  }


  return (
    <div className={props.vp === "m" ? 'news-wrapper-m' : 'news-wrapper'}>
      <div onClick={handleGoback}>

        {/* <FaArrowLeft /> */}
        {props.vp !== "m" && <>
          {/* {" "}<div>Back to blogs</div> */}

        </>}

        <BackBtn />
      </div>
      <div>
        {props.thumbnail.title}
      </div>
      <div>
        <ReactMarkdown rehypePlugins={[rehypeHighlight]} children={MDContent} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default Blog;