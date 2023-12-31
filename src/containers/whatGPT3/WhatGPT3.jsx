import React from 'react';
import workshop from '../../assets/workshop.png';
import Feature from '../../components/feature/Feature';

import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="workshop">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Get latest updates and be connected with world" text="Here,we will help to the students and get them ready for joining the corporate world ." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination. We connect you with some of the industry experts and get you industry ready.</h1>
      <div className="gpt3__workshop">     
      <img src={workshop} alt="possibility" />
      </div>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Hackathon" text="Participate in the contest and get ready for embracing your coding skills.We are going to share hackathone which will be held in Cuh as well as Hackathons organised by some recognized platforms." />
      <Feature title="Job Opportunity" text=" Here we will provide some recent job opening which anyone can apply through off-campus.We have done a lot of research for providing relevant job links." />
      <Feature title="Workshop" text="Experience can let you achieve your success with some easy steps.So join this workshop and listen to the knowledge and experience of some profound experts in industry as well as in education." />
    </div>
  </div>
);

export default WhatGPT3;