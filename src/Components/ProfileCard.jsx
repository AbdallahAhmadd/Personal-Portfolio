import './profilecard.css'

import Personal from '../assets/MyPic.jpeg'
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
                <button>Github</button>
                <button>LinkedIn</button>
                <button>Instagram</button>
          </div>

      </div>
    );
}

export default ProfileCard