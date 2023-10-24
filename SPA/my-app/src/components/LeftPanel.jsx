import React from 'react';
import '../assets/css/LeftPanel.scss';
import Header from '../components/Header';


function LeftPanel(props) {
    return (


        <div className={props.vp === "t" ? 'container-t' : props.vp === "m" ? 'container-m' : 'container'}>

            {
                props.vp !== "m" ? <>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </> : ""
            }


            <div className={props.vp === "t" ? 'card__content' : props.vp === "m" ? 'card__content_m' : 'card__content'}>

                <Header vp={props.vp} />

            </div>


        </div>

    );
}

export default LeftPanel;