import myPhoto from './my_image.jpg';
import skillswap_image from './skillswap_image.png';
import loan_image from './loan.png';
import pawfit_image from './pawfit.webp';
import nasa_image from './nasa.png';
import palantir_image from './Palantir.webp';
import resume from './Hoi_Tong_Yeung_resume_10_18_2025.pdf';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='intro'>
        <img src={myPhoto} className="App-logo" alt="My Photo" />
    
        <h1>Hi, I'm Hoi Tong!</h1>
        <p>I'm a CS major student studying at UCSC.</p>
        <p>I'm interning at NASA <img src={nasa_image} alt="nasa image" className="inline-image-nasa" />, and I fellowed at Palantir <img src={palantir_image} alt="palantir image" className="inline-image-palantir" />. Also, I'm currently doing undergraduate research.</p>
        <p>In my free time, I like to make cute projects.🐱</p>
        <p>You might also see me play golf and tennis from time to time.⛳🎾</p>



      <div className="social-links">

        <a
          className="LinkedIn-link"
          href="https://www.linkedin.com/in/hoiy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://github.com/Hoi-Tong"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          className="App-link"
          href="https://github.com/Hoi-Tong"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a href="/resume.pdf" download="Hoi_Tong_Yeung_resume_10_18_2025.pdf">
          Resume
        </a>

        </div>
      </div>

      </header>
    
      <div className='projects_header'>
        <h1>My Projects</h1>
      </div>

<div className="container">

  <div className="SkillSwap-section">
  <div className="SkillSwap-intro">
    <a 
    href="https://github.com/Q-bh/skillswap" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    <h1>SkillSwap</h1>
    </a>
        <p>I thought it would be nice to teach people how to play golf</p>
        <p>while learning any new skill for myself, so I created SkillSwap!</p> 
         </div>

  <img
    src={skillswap_image}
    alt="SkillSwap demo"
    className="SkillSwap-image"
  />
</div>



<div className="LoanProject-section">
  <div className="LoanProject-intro">
    <a 
    href="https://github.com/Hoi-Tong/Loan-Defaults-Prediction1" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    <h1>Loan Default Prediction Project</h1>
    </a>
    <p>I had a weird dream about becoming a money loan. After I</p>
    <p>woke up, I wondered how can I tell if a person is a good</p>
    <p>candidate to loan money to? Then, I searched up how to do</p>
    <p>data analysis and modeling and created a machine learning</p>
    <p>model that predict loan default with many data.</p>
  </div>

  <img
    src={loan_image}
    alt="Loan Project demo"
    className="LoanProject-image"
  />
</div>




<div className="PawFit-section">
  <div className="PawFit-intro">
    <a 
    href="https://github.com/Hoi-Tong/random_outfit_generator" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    <h1>PawFit</h1>
    </a>
    <p>I like cats, and I like fashion. So, I created Pawfit! I have cats</p>
    <p>dress in random outfits. I had so much fun making this project!!</p>
  </div>

  <img
    src={pawfit_image}
    alt="PawFit demo"
    className="PawFit-image"
  />
</div>

    </div>

</div>




  );
}

export default App;
