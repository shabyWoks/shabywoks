import React from 'react';
import CircularRate from './CircularRate';
import Storyline from './Storyline';
import PieWheel from './PieWheel';
import ExpertiseItem from './ExpertiseItem';

class Dashboard extends React.Component {
    selected= 1;
    arr= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    start = [45, 135, 225, 315];
    circularRateBox= [
        { name: 'Core Java', value: 80, color: '#00f0ff' },
        { name: 'C', value: 40, color: '#171818' },
        { name: 'CODING', value: 75, color: '#28cd00' },        
        { name: 'SQL', value: 60, color: '#e51616' },
        { name: 'JavaScript', value: 70, color: '#000000' }
    ];

    storyLine = [
        { imageUrl: '/images/born.jpg', head: 'BORN', detail: 'APRIL 04, 1994'},
        { imageUrl: '/images/school.jpg', head: 'HIGH SCHOOL', detail: 'SHREE JAIN, 2013'},
        { imageUrl: '/images/graduate.jpg', head: 'GRADUATION', detail: 'JADAVPUR UNIVERSITY, 2018'}
    ];

    pieComponent = [
        {head: 'Introducing', color:'#52c1c1'},
        {head: 'Education', color:'#da3131'},
        {head: 'Experience', color:'#8531da'},
        {head: "That's Me", color:'#dab031'}
    ]

    expertise = [
        {imageUrl: '/images/java.png', name: 'Java', accuracy: 80, hours: 500 },
        {imageUrl: '/images/js.png', name: 'JavaScript', accuracy: 70, hours: 120 },
        {imageUrl: '/images/angular.png', name: 'Angular', accuracy: 70, hours: 220 },
        {imageUrl: '/images/css.png', name: 'CSS', accuracy: 60, hours: 180 },
        {imageUrl: '/images/node.png', name: 'Node', accuracy: 52, hours: 60 },
        {imageUrl: '/images/hibernate.png', name: 'Hibernate', accuracy: 50, hours: 40 },
        {imageUrl: '/images/react.png', name: 'React', accuracy: 75, hours: 200 },
        {imageUrl: '/images/spring.png', name: 'Spring', accuracy: 45, hours: 60 },
        {imageUrl: '/images/redux.jpg', name: 'Redux', accuracy: 72, hours: 20 },
        {imageUrl: '/images/android.png', name: 'Android', accuracy: 90, hours: 380 },
        {imageUrl: '/images/dotnet.png', name: '.Net', accuracy: 55, hours: 360 },
        {imageUrl: '/images/bootstrap.png', name: 'Bootstrap', accuracy: 55, hours: 100 },
        {imageUrl: '/images/html.png', name: 'HTML', accuracy: 88, hours: 100 },
        {imageUrl: '/images/sql.png', name: 'SQL', accuracy: 78, hours: 200 }
    ];

    constructor(props){
        super(props);
        this.state = {
            start: [45, 135, 225, 315]
        }
    }

    
    generateRandomColor = () => {
        let col = '#';
        for(let i=0; i<6; i++){
            let val = Math.floor(Math.random() * 16);
            col = col + this.arr[val];
        }
        return col;
    }
    addNum = (num) => {
        for(let i =0; i< this.start.length; i++){
            this.start[i] = this.start[i] + num;
        }
        
    }
    rotate = (val) => {
        if(val > this.selected){
            this.selected === 1 && val === 4 ? this.addNum(90) : this.addNum(-90);
        } else if(val < this.selected){
            this.selected === 4 && val === 1 ? this.addNum(-90) : this.addNum(90);
        }
        this.selected = val;
        this.setState(() => ({ start: this.start }));
    }

    renderContent = () => {
        if(this.selected === 1){
            return (
                <div className="pie-detail">
                    <p>Shubham Bhiwaniwala</p>
                    <p>Software Engineer at YOI.</p>      
                </div>
            );
        } else if(this.selected === 2){
            return (
                <div className="pie-detail">
                    <p>Bachelor in Engineering</p>
                    <p>Jadavpur University, India.</p>      
                </div>
            );
        } else if(this.selected === 3){
            return (
                <div className="pie-detail">
                    <p>Intern</p>
                    <p>Goldman Sachs.</p>      
                </div>
            );
        } else if(this.selected === 4){
            return (
                <div className="pie-detail">
                    <p>Dedicated</p>
                    <p>Enthusiast</p>
                    <p>Coder,</p>
                    <p>Developer, and</p>
                    <p>Learner.</p>      
                </div>
            );
        }
    }

    

    render() {
        return (
            <div className='dashboard-class'>
                <div className="parallax" style={{backgroundImage: 'url(/images/img1.jpg)'}}>
                    <div className="pie-component">
                        {this.pieComponent.map((piec, i) => <PieWheel index= {i} onClick= {this.rotate} selected={this.selected} start={this.start[i]} color={piec.color} head={piec.head}/>)}
                    </div>
                    { this.renderContent() }
                </div>
                <div className="p pad-lg-d">
                    <div className="p-storyline-header flex-center">MY STORYLINE</div>
                    <div className="flex-center-space-around">
                        {this.storyLine.map((story) => <Storyline imageUrl= {story.imageUrl} head= {story.head} detail= {story.detail} /> )}
                    </div>
                </div>
                <div className="parallax flex-center" style={{backgroundImage: 'url(/images/img2.jpg)', height: '60%'}}>
                    <div className="skills flex-center">THE SKILLS</div>
                </div>
                <div className="p">
                    <div className="p-rateline-header flex-center">HOW DO I RATE MYSELF ?</div>
                    <div className="flex-center-space-around pad-lg-ud">
                        {this.circularRateBox.map((box) => <CircularRate color={box.color} value= {box.value} name= {box.name}/> )}
                    </div>
                </div>
                <div className="parallax flex-center" style={{backgroundImage: 'url(/images/img3.jpg)', height: '95%'}}>
                    <div className="skills flex-center flex-down">
                        KNOWLEDGE
                    </div>
                </div>
                <div className="p">
                    <div className="p-expertise-header flex-center">EXPERTISE IN</div>
                    <div className="flex-center-space-around pad-lg-ud">
                        <div style={{height: '100%', width: '70rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                            {
                                this.expertise.map((expert) => <ExpertiseItem accuracy={expert.accuracy} imageUrl={expert.imageUrl} name={expert.name} color= {this.generateRandomColor()}/>)
                            }
                        </div>
                    </div>
                </div>
                <div className="parallax flex-center" style={{backgroundImage: 'url(/images/img5.jpg)', height: '60%'}}>
                <div className="skills flex-center flex-down" style= {{fontSize: '6.4rem'}}>
                        Practice makes you perfect
                    </div>
                </div>
                <div className="p">
                    <div className="flex-center-space-around">
                        <dl>
                            <dt>
                                How long I played with them?
                            </dt>
                            {
                                this.expertise.map(
                                    (elem) => <dd className={`percentage flex-start percentage-${elem.hours/10}`}><span className="text">{elem.name}: {elem.hours}hrs+</span></dd>)
                            }
                        </dl>
                    </div>
                </div>
                <div className="parallax flex-center" style={{backgroundImage: 'url(/images/img4.jpg)', height: '90%'}}>
                    <div className="skills flex-center flex-down banner-bg">
                        More to come..
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Dashboard;