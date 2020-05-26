import React,{Component} from 'react';
import CONTACTS from '../data/contacts';
class C1 extends Component
{
    render(){
     
             
         return(
             <div style={{ display: 'inline-block', margin: 10 }}>
             
            
             <a href= { this.props.c1.link}>
             <img src= { this.props.c1.img}alt='fbf' style={{width :50 , height :50}}></img>
           </a>
           
             </div>
         )
 
     }
}
class Contacts extends Component{
    render(){
        return(
            <div>
            <h2>Connect with me</h2>
            <div>
                {
           CONTACTS.map(C => (
                   <C1 key={C.id} c1={C}/>
                   )
           )
                }
            </div>
            </div> 
        )
    }
}
export default Contacts;