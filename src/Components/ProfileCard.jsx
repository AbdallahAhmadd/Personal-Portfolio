import './profilecard.css'

import Personal from '../assets/MyPic.jpeg'

function handleGitClick(){
    window.open('https://github.com/AbdallahAhmadd')
}
function handleLinkedInClick(){
    window.open('https://www.linkedin.com/in/abdallah-ahmed-hassan/')
}
function handleInstagramClick(){
    window.open('https://www.instagram.com/abdallahahmed___/')
}

function ProfileCard(){
    return(
      <div id={'container'}>

          <div id={'header'}>

            <div id={'logo'}>
                <img src={Personal} alt={'Photo of the author'}/>
            </div>

            <div id={'heading'}>
                <h2>Abdallah Ahmed</h2>
                <h3>Egypt, Cairo</h3>
            </div>

            <div id={'subheading'}>
                <h4>Computer Engineering Student at the<br/>German University in Cairo</h4>
            </div>

          </div>

          <div id={'content'}>
              <button>Projects</button>
              <button onClick={handleGitClick}>Github<i className="fa-brands fa-github"></i> </button>
              <button onClick={handleLinkedInClick}>LinkedIn<i className="fa-brands fa-linkedin"></i></button>
              <button onClick={handleInstagramClick}>Instagram<i className="fa-brands fa-instagram"></i></button>
          </div>

      </div>
    );
}

export default ProfileCard