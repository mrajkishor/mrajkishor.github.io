"use strict";
import React, { Fragment, useEffect, useId, useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Content.scss';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Helmet } from 'react-helmet';
import { FaSearch } from "react-icons/fa";
import * as myConstClass from '../assets/blogs/ref.js';
import { useNavigate } from "react-router-dom";
import CodeBox from './cards/CodeBox';
import StackGrid, { transitions } from "react-stack-grid";

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // You can choose any highlight.js theme

import MultiActionAreaCard from './mui/Card';
const { scaleDown } = transitions;
const constants = myConstClass.BLOG_DEEPLINKS;
Content.propTypes = {
};

function Content(props) {

    const [vp, setVp] = useState();




    useEffect(() => {
        if (props.blog) { //on page refresh : since blog is passed as child component as props in App.js (check)
            setVp(props.blog.props.vp);
        } else { // on click on read more
            setVp(props.vp)
        }
    }, []); //for the first time set props vp to vp, because after handleReadmore event fire, props value will be changed and mobile layout will not be applied by using props.vp

    return (
        <>
            <Helmet>
                <title>Rajkishor | Blog</title>
            </Helmet>


            <div className='content-wrapper'>


                <div class="flex-container">

                    <div>
                        <div className={vp === "m" ? 'card_blog_m' : 'card_blog'}>
                            <div className={vp === "m" ? 'tools_blog_m' : 'tools_blog'}>
                                <div class="circle_blog">
                                    <span class="red_blog box_blog"></span>
                                </div>
                                <div class="circle_blog">
                                    <span class="yellow_blog box_blog"></span>
                                </div>
                                <div class="circle_blog">
                                    <span class="green_blog box_blog"></span>
                                </div>
                            </div>
                            <div class="card__content_blog">
                                <div className={vp === "m" ? 'fit-screen' : ''}>
                                    {(!props.blog) ?
                                        <>
                                            <StackGrid
                                                columnWidth={"100%"}
                                                appear={scaleDown.appear}
                                                appeared={scaleDown.appeared}
                                                enter={scaleDown.enter}
                                                entered={scaleDown.entered}
                                                leaved={scaleDown.leaved}
                                            >
                                                {
                                                    constants.sort((prev, next) => {
                                                        return next.id - prev.id; // descending by id
                                                    }).map((thumbnail, index) => {
                                                        return <Fragment>
                                                            {
                                                                thumbnail.publish &&
                                                                <>
                                                                    {/* <div className='blog-thumbnail'>
                                                                    <div>
                                                                        {thumbnail.title}
                                                                    </div>
                                                                    <div>
                                                                        {thumbnail.description} <a onClick={() => handleReadmore(thumbnail.url)} className='read-more-link'>Read more</a>
                                                                    </div>
                                                                    <div>
                                                                        <span>
                                                                            Time  {thumbnail.time}
                                                                        </span>
                                                                        <span>
                                                                            Dt {thumbnail.date}
                                                                        </span>
                                                                    </div>
                                                                    <div className='clear-line'></div>
                                                                </div> */}


                                                                    <div key={useId}><MultiActionAreaCard
                                                                        enableImg={false}
                                                                        title={thumbnail.title}
                                                                        desc={thumbnail.description}
                                                                        link={thumbnail.url}
                                                                        date={thumbnail.date}
                                                                        time={thumbnail.time}
                                                                        keywords={thumbnail.keywords}
                                                                        vp={vp}
                                                                    /></div>


                                                                </>
                                                            }

                                                        </Fragment>
                                                    })
                                                }
                                            </StackGrid>
                                        </> : <>
                                            <div className='blog-thumbnail'>
                                                <div className='blog-desc-wrapper'>
                                                    {props.blog}

                                                </div>
                                            </div>
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>



                    {true || <>

                        {
                            vp !== "m" && <>
                                <div>
                                    <div className='filter-options'>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                                            <Form.Control
                                                placeholder="Type Keywords here"
                                                aria-label="Search"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                        <div>*Search for blog title, keyword, date/time. <br />Ex: 2022 Aug, Memo etc.
                                            {/* <br />
                                        <font color="#e74c3c">FYI, Search operation shall remain <br />disabled prior to 20 published blogs</font> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                    }

                </div>

            </div>
        </>
    );
}
export function BlogCard(props) {
    let { thumbnail } = props;

    return (
        <>

        </>
    );
}
export default Content;