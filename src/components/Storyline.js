import React from 'react';

class Storyline extends React.Component {
    render () 
    {
        return (
            <div className="flex-center flex-down">
                <img className="img-round" src={`${this.props.imageUrl}`} />
                <div>
                    <p className="p-storyline-1">{this.props.head}</p>
                    <p className="p-storyline-2">{this.props.detail}</p>
                </div>
            </div>
        )
    }
}
export default Storyline;