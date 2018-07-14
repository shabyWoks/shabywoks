import React from 'react';

class Dashboard extends React.Component {
    selected= 1;
    start = [45, 135, 225, 315];
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
                <div className="parallax">
                    <div className="pie-component">
                        <div className= {`pie`} style= {{transform : `rotate(${this.start[0]}deg)`}} onClick={this.rotate.bind(this, 1)}>
                            <div className= "pie-content">Introducing</div>
                        </div>
                        <div className= {`pie`} style= {{transform : `rotate(${this.start[1]}deg)`}} onClick={this.rotate.bind(this, 2)}>
                            <div className= "pie-content">Education</div>
                        </div>
                        <div className= {`pie`} style= {{transform : `rotate(${this.start[2]}deg)`}} onClick={this.rotate.bind(this, 3)}>
                            <div className= "pie-content">Experience</div>
                        </div>
                        <div className= {`pie`} style= {{transform : `rotate(${this.start[3]}deg)`}} onClick={this.rotate.bind(this, 4)}>
                            <div className= "pie-content">That's Me</div>
                        </div>
                    </div>
                    { this.renderContent() }
                </div>
            </div>
        );
    }
    
}

export default Dashboard;