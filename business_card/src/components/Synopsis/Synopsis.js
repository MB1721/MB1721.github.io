import React from 'react';
import './Synopsis.css';
import cssIco from '@images/icons/css3-alt.svg';
import figmaIco from '@images/icons/figma.svg';
import wordpressIco from '@images/icons/wordpress.svg';

export default function Synopsis() {
  return (
    <div className="synopsis">
      <section className="about">
        <h2>About</h2>
        <p>I am a full-stack web developer based in Pennsylvania. My passion for programming stems from a deep appreciation for systems. This passion fuels my constant pursuit of challenges, as they offer opportunities to craft innovative systems aimed at solving persistent issues or devising methodologies to address future occurrences in a sustainable manner.</p>
      </section>
      <section className="values">
        <h2>My Values</h2>
        <p>When I look for a company to work with, I am searching for someone with a strong identity, a clear purpose, and the determination to see their goals through. I promise to do the utmost to help your company realize its vision.</p>
      </section>
      {/* <section className="goals">
        <h2>Goals</h2>
        <p>My goal is to be a self-sufficient web application developer. I want to continue my education until I know how to do everything from the design of an application up to its deployment</p>
      </section>
      <section className="my-journey">
        <h2>My Journey</h2>
        <p>I began my programming journey in October 2019. I spent my first two years inconsistently learning to code in random languages until I found a project that inspired me to take my studying seriously. It was a moderately sized project that added several new features to Mojang's Minecraft video game. Though not true coding, it taught me how to use IDEs, link files, navigate my file system, and much more! Most importantly, it taught the kind of patience I needed to spend hours pouring through documentation and bug fixing just to figure out how to get a projectile to move in a straight line. Since then, I have been dedicated to learning the ins and outs of computers. Now, I am taking on the world of web development. I am only one year into my web developer journey, but in that time I have learned front-end languages: JS, CSS, HTML and their derivatives, as well as back-end: SQL, MySQL, and Node. I have learned to set up servers, create and manage databases, develop responsive websites, and build web apps from scratch.</p>
      </section> */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills_container">
          <figure className="skills_item">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve" width="512" height="512">
              <g id="layer1_00000069379214082054225550000004600713903019782292_" transform="translate(-193.633,-276.3622)">
                <g id="g3013_00000093138603932973688150000013863908198644500923_" transform="translate(119,276.3622)">
                  <path d="M78.131,4.717l1.547,17.356L86.623,24l6.963-1.93l1.549-17.353H78.131z M81.295,8.264h5.33v2.129h-5.137L81.295,8.264z     M86.633,14.701h2.614L89,17.462l-2.367,0.639V14.701z M86.633,12.573v-2.18h2.992l-0.194,2.18H86.633z M81.679,12.573h4.947    v2.129H81.87L81.679,12.573z M92.259,20.965l-5.626,1.56v-2.209l-0.01,0.003l-4.36-1.211l-0.298-3.342h2.137l0.152,1.698    l2.37,0.64l0.002,0v2.214l0.007-0.002l4.357-1.208l0.968-10.844h-5.325V6.135h6.95L92.259,20.965z"/>
                  <polygon points="91.958,8.264 90.99,19.108 86.633,20.315 86.633,18.101 89,17.462 89.247,14.701 86.633,14.701 86.633,12.573     89.431,12.573 89.625,10.393 86.633,10.393 86.633,8.264   "/>
                  <rect x="86.626" y="12.573" width="0.007" height="2.129"/>
                  <rect x="86.626" y="8.264" width="0.007" height="2.129"/>
                  <rect x="86.625" y="18.102" width="0.008" height="2.214"/>
                  <path id="path2999_00000183935336956994173500000009856227378309738643_" d="M82.133,0h2.578v1.078h-1.5v1.078h1.5v1.078h-2.578V0    z"/>
                  <path id="path3001_00000096055226761582317920000005110122629658984122_" d="M85.227,0h2.578v0.938h-1.5v0.188h1.5v2.156h-2.578    V2.297h1.5V2.109h-1.5V0z"/>
                  <path id="path3003_00000136402835624896882680000006132478931596835508_" d="M88.32,0h2.578v0.938h-1.5v0.188h1.5v2.156H88.32    V2.297h1.5V2.109h-1.5V0z"/>
                  <polygon points="91.958,8.264 90.99,19.108 86.633,20.315 86.626,20.317 86.626,18.103 86.633,18.101 89,17.462 89.247,14.701     86.626,14.701 86.626,12.573 89.431,12.573 89.625,10.393 86.626,10.393 86.626,8.264   "/>
                </g>
              </g>
            </svg>
          </figure>
          <figure className="skills_item">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve" width="512" height="512">
              <g id="Group">
                <g id="Rectangle_55_x5F_2">
                  <path d="M18.312,8.245c1.222-0.803,2.031-2.187,2.031-3.755c0-2.476-2.015-4.49-4.491-4.49H8.148C5.672,0,3.657,2.014,3.657,4.49    c0,1.568,0.809,2.952,2.031,3.755C4.466,9.048,3.657,10.432,3.657,12s0.809,2.952,2.031,3.755    c-1.222,0.802-2.031,2.186-2.031,3.755c0,2.476,2.025,4.49,4.515,4.49c2.516,0,4.564-2.036,4.564-4.539V15.32    c0.798,0.727,1.858,1.17,3.019,1.17h0.097c2.476,0,4.491-2.014,4.491-4.49C20.343,10.432,19.534,9.048,18.312,8.245z     M12.735,1.471h3.117c1.665,0,3.02,1.354,3.02,3.019s-1.355,3.02-3.02,3.02h-3.117V1.471z M5.128,4.49    c0-1.665,1.355-3.019,3.02-3.019h3.117V7.51H8.148C6.483,7.51,5.128,6.155,5.128,4.49z M5.128,12c0-1.665,1.355-3.019,3.02-3.019    h3.117v6.039H8.129C6.473,15.009,5.128,13.658,5.128,12z M11.265,19.461c0,1.692-1.388,3.068-3.093,3.068    c-1.678,0-3.044-1.354-3.044-3.019s1.355-3.02,3.02-3.02h3.117V19.461z M15.852,15.02h-0.097c-1.665,0-3.019-1.355-3.019-3.02    s1.354-3.019,3.019-3.019h0.097c1.665,0,3.02,1.354,3.02,3.019S17.517,15.02,15.852,15.02z"/>
                </g>
                <g id="Rectangle_55_x5F_4">
                  <path d="M8.148,15.019c-0.007,0-0.013,0-0.019,0h3.136v0H8.148z"/>
                </g>
              </g>
            </svg>
          </figure>
          <figure className="skills_item">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" xmlSpace="preserve" width="512" height="512">
              <g>
                <path d="M5.457,4.257c-0.277,0-0.472,0.033-0.669,0.082v0.033H4.82   c0.132,0.261,0.36,0.441,0.522,0.67c0.131,0.261,0.246,0.521,0.376,0.783C5.734,5.808,5.75,5.791,5.75,5.791   c0.23-0.162,0.344-0.424,0.344-0.816C5.996,4.86,5.98,4.747,5.898,4.632C5.8,4.469,5.588,4.388,5.457,4.257L5.457,4.257z"/>
                <path d="M22.107,18.442c-1.307-0.033-2.318,0.098-3.167,0.457   c-0.245,0.098-0.636,0.098-0.67,0.408c0.131,0.13,0.147,0.342,0.262,0.523c0.196,0.326,0.537,0.766,0.848,0.996   c0.343,0.261,0.686,0.521,1.045,0.75c0.636,0.393,1.355,0.621,1.974,1.013c0.36,0.228,0.718,0.522,1.079,0.767   c0.179,0.13,0.292,0.343,0.521,0.424V23.73c-0.115-0.146-0.147-0.359-0.261-0.523c-0.163-0.162-0.327-0.31-0.49-0.472   c-0.474-0.637-1.062-1.191-1.697-1.648c-0.523-0.36-1.666-0.85-1.877-1.452c0,0-0.017-0.017-0.033-0.033   c0.359-0.033,0.784-0.164,1.127-0.263c0.554-0.146,1.06-0.113,1.631-0.26c0.262-0.066,0.523-0.148,0.785-0.228v-0.148   c-0.295-0.293-0.506-0.686-0.817-0.963c-0.832-0.718-1.747-1.419-2.693-2.008c-0.507-0.327-1.16-0.538-1.699-0.816   c-0.195-0.098-0.521-0.146-0.636-0.311c-0.294-0.359-0.458-0.832-0.67-1.257c-0.473-0.897-0.931-1.892-1.338-2.84   c-0.294-0.636-0.473-1.272-0.832-1.86c-1.682-2.775-3.51-4.456-6.317-6.105C7.579,2.2,6.861,2.053,6.094,1.874   C5.685,1.856,5.278,1.825,4.87,1.809C4.608,1.694,4.346,1.384,4.118,1.237c-0.931-0.587-3.329-1.86-4.015-0.179   c-0.441,1.062,0.653,2.106,1.029,2.645c0.277,0.375,0.637,0.8,0.832,1.224C2.078,5.204,2.11,5.498,2.225,5.791   c0.261,0.718,0.505,1.518,0.849,2.188C3.253,8.322,3.449,8.682,3.677,8.99c0.132,0.181,0.36,0.261,0.409,0.556   C3.858,9.872,3.84,10.362,3.71,10.77c-0.587,1.845-0.359,4.13,0.474,5.484c0.261,0.408,0.881,1.306,1.714,0.963   c0.734-0.293,0.571-1.224,0.783-2.039c0.049-0.197,0.016-0.327,0.114-0.457v0.033c0.228,0.456,0.457,0.896,0.67,1.355   c0.506,0.799,1.387,1.632,2.123,2.186c0.391,0.295,0.701,0.8,1.191,0.98v-0.049h-0.032c-0.098-0.146-0.245-0.212-0.375-0.326   c-0.294-0.294-0.62-0.653-0.849-0.98c-0.685-0.914-1.29-1.926-1.828-2.971c-0.262-0.507-0.49-1.062-0.702-1.567   c-0.098-0.195-0.098-0.49-0.261-0.587c-0.246,0.359-0.604,0.669-0.783,1.109c-0.31,0.703-0.343,1.568-0.458,2.466   c-0.065,0.017-0.032,0-0.065,0.032c-0.522-0.13-0.701-0.669-0.898-1.125c-0.489-1.16-0.572-3.021-0.147-4.36   c0.114-0.342,0.605-1.419,0.408-1.746C4.689,8.859,4.363,8.682,4.184,8.436c-0.212-0.31-0.442-0.701-0.587-1.045   c-0.392-0.914-0.589-1.926-1.012-2.84c-0.196-0.425-0.54-0.866-0.816-1.257C1.458,2.853,1.115,2.543,0.87,2.021   c-0.081-0.18-0.195-0.474-0.065-0.669c0.032-0.131,0.098-0.18,0.229-0.213C1.245,0.96,1.85,1.188,2.061,1.286   C2.666,1.53,3.172,1.76,3.677,2.102c0.229,0.164,0.474,0.474,0.767,0.556h0.343c0.522,0.113,1.11,0.032,1.6,0.179   c0.864,0.277,1.648,0.685,2.35,1.126c2.138,1.355,3.901,3.282,5.092,5.583c0.196,0.375,0.279,0.718,0.458,1.109   c0.343,0.802,0.768,1.618,1.11,2.4c0.343,0.767,0.67,1.55,1.16,2.188c0.244,0.342,1.224,0.522,1.665,0.702   c0.326,0.146,0.832,0.277,1.126,0.456c0.555,0.342,1.109,0.735,1.632,1.111C21.241,17.708,22.058,18.115,22.107,18.442   L22.107,18.442z"/>
              </g>
            </svg>
          </figure>
        </div>
      </section>
    </div>
  );
}