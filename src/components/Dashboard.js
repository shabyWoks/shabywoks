import React from 'react';
import CircularRate from './CircularRate';
import Storyline from './Storyline';
import PieWheel from './PieWheel';

class Dashboard extends React.Component {
    selected= 1;
    start = [45, 135, 225, 315];
    circularRateBox= [
        { name: 'Core Java', value: 70, color: '#00f0ff' },
        { name: 'C', value: 40, color: '#171818' },
        { name: 'SQL', value: 60, color: '#e51616' },
        { name: 'JavaScript', value: 65, color: '#000000' },
        { name: 'Programming', value: 75, color: '#28cd00' }
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

    constructor(props){
        super(props);
        this.state = {
            start: [45, 135, 225, 315]
        }
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
                    <div className="skills">THE SKILLS</div>
                </div>
                <div className="p">
                    <div className="p-rateline-header flex-center">HOW DO I RATE MYSELF ?</div>
                    <div className="flex-center-space-around pad-lg-ud">
                        {this.circularRateBox.map((box) => <CircularRate color={box.color} value= {box.value} name= {box.name}/> )}
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Dashboard;