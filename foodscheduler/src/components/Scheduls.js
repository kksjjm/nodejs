import React from 'react';

class Scheduls extends React.Component {
    render() {
        let data = this.props;
        return (
            
            <div>
                <Foods ap={data.ap} main={data.main} main_img={data.main_img}
                 sub1={data.sub1} sub1_img={data.sub1_img}
                 sub2={data.sub2} sub2_img={data.sub2_img}/>
                 
                <Staff ap={data.ap} chef1={data.chef1} chef2={data.chef2}/>
            </div>
        )
    }
}

class Foods extends React.Component {
    render(){
        let data = this.props;
        return (
            <div>
                <h2>오늘의 맛있는 {data.ap} 식사입니다.</h2>
                <img src={data.main_img} alt="main-dish"/>
                <p>{data.main}</p>
                <img src={data.sub1_img} alt="sub-dish1"/>
                <p>{data.sub1}</p>
                <img src={data.sub2_img} alt="sub-dish2"/>
                <p>{data.sub2}</p>
            </div>
        )
    }
}

class Staff extends React.Component {
    render(){
        let data = this.props;
        return (
            <div>
                <h2>오늘의 {data.ap} 당번입니다.</h2>
                <p>{data.chef1}</p>
                <p>{data.chef2}</p>
            </div>
        )
    }
}

export default Scheduls;