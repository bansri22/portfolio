import React,{Component} from 'react';
import Projects from './Projects';
import Contacts from './Contacts';
import Title from'./Title';
import Bansri from '../assets/bansri.jpeg';
class App extends Component
{
    state = { d:true }
    /*constructor(){
        super();
        this.state={d:true};
        this.toggledisplay=this.toggledisplay.bind(this);
    }*/
      
    
    toggledisplay =  () => 
    {
        this.setState({d:!this.state.d})
    }
        render(){
        return(
    <div className='img'>
        <img src={Bansri} style={{width:250,height:250}} alt='profile'/>
    <h1>Bansri Shah</h1>
    <p>I am looking for Full-time opportunity in IT field</p>
  <Title  />
  <span> </span>
    {!this.state.d?
    <div >
        <p>I am a Full-Stack Developer who known for problem solving, time management, hard-work, documentation smoothly. And turning all these qualities into simple and efficient web. I also love the doing coding and try to write elegant and efficient code. I always react positively towards the challenges that comes and solve them with great interest.


I have learned both front-end and back-end technologies which make me specialises in Web Enterprise Applications. My preferred technologies include Java, JSF, JSP web servers and database to develop efficient business logic and which could be run using different front-end technology HTML5, CSS3, JavaScript, PHP, Angular JS. Currently, I am trying to explore single page application using ReactJS.


I am always available for any work that includes coding, critical thinking and active learning. Connect with me.</p><button onClick={this.toggledisplay}>close</button>

    </div>: <div > <button onClick={this.toggledisplay}>About me</button></div>
        }
        <hr />
        <Projects />
        <hr />
        <Contacts />
</div>


        )
    }
}
export default App;