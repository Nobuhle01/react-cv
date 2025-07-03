import React, { forwardRef } from 'react';
import './Resume.css';

const Resume = forwardRef((props, ref) => {
  return (
    <div className="resume-container" ref={ref}>
      <header>
        <h1>Nobuhle Ntshangase</h1>
        <p>Full Stack Web Developer</p>

        <p>
          <strong>Phone:</strong> 0715742831 / 0751983022
        </p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:nobuhlentshangase21@gmail.com">
            nobuhlentshangase21@gmail.com
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/nobuhle-ntshangase" target="_blank" rel="noreferrer">
            linkedin.com/in/nobuhle-ntshangase
          </a>{' '}
          |{' '}
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/Nobuhle01" target="_blank" rel="noreferrer">
            github.com/Nobuhle01
          </a>{' '}
          |{' '}
          {/* <strong>Portfolio:</strong>{' '}
          <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">
            yourportfolio.com
          </a> */}
        </p>

        <p>
          <strong>Address:</strong> 1200 Mwasi Street, Mofolo Central, Soweto, 1801
        </p>
      </header>

<section>
  <h2>Personal Information</h2>
  <p><strong>Date of Birth:</strong> 21 June 2003</p>
  <p><strong>Nationality:</strong> South African</p>
</section>

      <section>
  <h2>Professional Summary</h2>
  <p>
    BSc Information Technology graduate with hands-on experience in full stack development, now focused on front-end and junior developer roles.
    Gained practical skills through a 2 months Full Stack Java Software Development internship , now I'm currently doing a full stack Java Software Development learnership and additional training with Edureka doing a Full Stack Web Development program. Passionate about crafting responsive, user-friendly web interfaces and eager to contribute to innovative development teams
    while continuing to grow professionally.
  </p>
</section>


      <section>
  <h2>Skills</h2>

  <h3>Technical Skills</h3>
  <ul>
    <li>Languages: JavaScript, HTML5, CSS3, TypeScript, Java</li>
    <li>Frameworks & Libraries: Angular, React, Node.js, Express.js, Bootstrap</li>
    <li>Databases: MongoDB, MySQL</li>
    <li>Tools: Git, GitHub, VS Code, Chrome DevTools, Netlify</li>
    <li>API: RESTful APIs, JSON</li>
  </ul>

  <h3>Soft Skills</h3>
  <ul>
    <li>Strong communication and collaboration</li>
    <li>Problem-solving and critical thinking</li>
    <li>Time management and adaptability</li>
    <li>Accountability</li>
    <li>Willingness to learn and self-improvement</li>
  </ul>
</section>

     <section>
  <h2>Work Experience</h2>

  <div>
    <h3>Full Stack Java Software Development Intern</h3>
    <p><strong>Reverside Software Solutions (Geeks4Learning)</strong> — Sandton, Rivonia</p>
    <p><em>April 01, 2025 – May 30, 2025</em></p>
    <ul>
      <li>Developed and maintained full stack web applications using Java, Angular, HTML, and JavaScript in an agile environment.</li>
      <li>Assisted in building responsive, user-friendly front-end components to enhance user experience.</li>
      <li>Participated in daily standups, sprint reviews, and agile ceremonies with cross-functional teams.</li>
      <li>Contributed to a collaborative project that was later discontinued due to sponsor withdrawal—gained valuable experience in full stack development and agile practices.</li>
    </ul>
  </div>

  <div>
    <h3>Software Development Learnership (Full Stack Java Developer)</h3>
    <p><strong>Geeks4Learning (Learnership Program)</strong> — Sandton, Rivonia</p>
    <p><em>July 01, 2025 – Present</em></p>
    <ul>
      <li>Currently enrolled in an intensive full stack development program focused on Java, Spring Boot, Angular, and modern front-end technologies.</li>
      <li>Participating in hands-on training covering version control, system design, and agile methodology.</li>
      <li>Strengthening skills through additional Edureka courses in full stack web development (React, JavaScript, API design).</li>
      <li>Preparing to apply training in real-world projects to enhance software development expertise and team collaboration.</li>
    </ul>
  </div>
</section>


      <section>
        <h2>Education</h2>
        <p>
          <li><strong>BSc in Information Technology</strong> – Richfield Graduate Institute of Technology (2022–2024)</li>
        </p>
        <p>
        <li> <strong>National Senior Certificate</strong> - Daliwonga Secondary School (2021)</li> 
        </p>
      </section>

      {/* <section>
        <h2>Certifications</h2>
        <ul>
          <li>Responsive Web Design – freeCodeCamp</li>
          <li>Angular Developer – Coursera</li>
        </ul>
      </section> */}
    </div>
  );
});

export default Resume;
