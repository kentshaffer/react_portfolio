import React from 'react';
import '../../styles/AboutMe.css';
import profPic from '../../Images/profPic.jpeg'

export default function AboutMe() {
  return (
    <div className='abtMeContainer'>
      <div className='imgContainer'>
        <img className='profImg' src={profPic} alt='Kent smiling with white wall as background' />
        <h1 id='abt'>About Me</h1>
      </div>
      <div className='bio'>
        <p>
          Hello, my name is Kent Shaffer. I have recently joined the growing population of
          developers. I am a student in the UCSD extension coding bootcamp and will complete
          my certificate in November of 2022.
        </p>
        <div className='pageBreak'/>
        <p>
          I am a front-end/full-stack web developer ready to combine
          past management and customer service experience with newly acquired web development
          skills in order to create user centered web applications. I have always loved problem solving, so naturally, developing
          user-friendly, interactive, responsive applications has taken my problem solving
          skills to the next level. Throughout the program, I have specifically enjoyed working on the front-end to create
          polished user interfaces. I am excited to take my newly obtained skills to the next
          level as I join the ever-growing community of professional web developers.
        </p>
        <div className='pageBreak'/>
        <p>
          Away from the screen, I enjoy cooking, cycling, and rock climbing. I am also days away from embarking on the journey of
          fatherhood, and am overjoyed to experience the adventures that being a parent will bring.
        </p>
      </div>
    </div>
  );
}
