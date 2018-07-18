import React from 'react';

class CircularRate extends React.Component {
    getCircle = (num) => {
        let value = 'polygon(50% 50%, 50% 0%, ';
        if(num <= 12.5){
            let v = (4 * num) + 50;
            value = value + `${v}% 0%`;
        } else if(num <= 37.5){
            value = value + '100% 0%, ';
            let v = (4 * (num - 12.5));
            value = value + `100% ${v}%`;
        } else if(num <= 62.5){
            value = value + '100% 0%, 100% 100%, ';
            let v = (4 * (num - 37.5));
            value = value + `${100 - v}% 100%`;
        } else if(num <= 87.5){
            value = value + '100% 0%, 100% 100%, 0% 100%, ';
            let v = (4 * (num - 62.5));
            value = value + `0% ${100 - v}%`;
        } else {
            value = value + '100% 0%, 100% 100%, 0% 100%, 0% 0%, ';
            let v = (4 * (num - 87.5));
            value = value + `${v}% 0%`;
        }
        value = value + ')';
        return value;
    }
    render () 
    {
        return (
            <div className="flex-start flex-down">
                <div 
                    className="flex-center flex-down rate-meter"
                    style= {
                        { 
                            clipPath: this.getCircle(this.props.value),
                            backgroundColor: `${this.props.color}22`, 
                            border: `0.7rem solid ${this.props.color}88` 
                        }
                    }
                >
                </div>
                <div className="flex-center rate-meter rate-meter-value" style={{color: `${this.props.color}44`}}>
                    {`${this.props.value}%`}
                </div>
                <div>
                   <p className="p-rateline-1">{this.props.name.toUpperCase()}</p>
                </div>
            </div>
        )
    }
}
export default CircularRate;