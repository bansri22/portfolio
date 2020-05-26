import React ,{Component} from 'react';

const TITLE=[

' Software Developer',' Web Developer', 'Programmer', 'Front End Developer', ' Software Engineer'
]

class Title extends Component
{
state ={t:0}
componentDidMount()
{
    console.log('will mount now ');
    this.countt();
}
componentWillUnmount()
{
    clearInterval(this.t);
}
countt = () =>
{
    this.t=setInterval(()=>{
        const t=(this.state.t + 1) % TITLE.length;
    this.setState({t});

    },2000);
    

} 
render(){
const diaplay =TITLE[this.state.t]
return(
<b><em style={{color : '#cddc39'}} >I am {diaplay}</em>    </b>
)
}

}
export default Title