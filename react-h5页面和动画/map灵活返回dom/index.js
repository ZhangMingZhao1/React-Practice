import React, { Component } from 'react';

import $ from 'jquery';

import './App.less';
import flag from '../assets/img/flag.png';
import bar from '../assets/img/bar.png';
import bgcard from '../assets/img/bgcard.png';
import clothes from '../assets/img/clothes.png';
import clothesimg from '../assets/img/clothesimg.png';

const playerRowsDefault = ['age', 'country', 'role', 'number', 'games', 'club', 'honors'];
const teamRowsDefault = ['continent', 'rank', 'attence', 'coach', 'honors'];
const refereeRowsDefault = ['age', 'country', 'games'];
const coachRowsDefault = ['age', 'team', 'startTime', 'honors'];
let rows;
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    animate () {
        let current = 500;
        let unit = 200;
        let unit2 = 600;
        setTimeout(() => {
            $('.right').animate({
                opacity: 1,
            }, unit2);
            $('.flag').animate({
                top: 134,
                opacity: 1,
            }, unit2);
            $('.bar').animate({
                top: 168,
                opacity: 1,
            }, unit2);
        }, current);
        current += unit2;
        
        for (let i = 1; i <= rows.length; i++) {
            setTimeout(() => {
                $(`.row:nth-child(${i})`).animate({
                    left: 0,
                    opacity: 1,
                }, unit);
            }, current);
            current += unit;
        }
        current += unit;

        console.log('总共耗时：', current);
    }

    componentDidMount () {
        this.animate();
    }

    render () {
        const { json } = this.props;
        const { variables } = json;
        const { infoType } = variables;
        let result;
        let title;
        let labels;
        if(infoType === 'team') {
            const {name,coach,rank,continent,attence,honors} = variables;
            title = '球队卡片';
            rows = teamRowsDefault.filter(d => {
                return variables[d] !== undefined && variables[d] !== null;
            });
            console.log(rows)
            labels = {
                continent: '所属大洲',
                rank: '世界排名',
                attence: '世界杯参赛次数',
                coach: '主教练',
                honors: '主要荣誉',
            }
            result = (
            <div className="wrapper">
                <div className='flag'>
                    <img src={flag} alt=""/>
                </div>
                <div className="bar">
                    <span className="barname">{name}</span>
                    <img src={bar} alt=""/>
                    <span className="bartitle">{title}</span>
                </div>
                <div className="right">
                    <img className="clothes" src={clothes} alt=""/>
                    <img className="clothesimg" src={clothesimg} alt=""/>
                </div>
                <div className='card'>
                    <div className="bgcard">
                        <img className="cover" src={bgcard} alt=""/>
                    </div>
                    <div className="infoBox">
                        {
                            rows.map(function(d,i){
                                let value = variables[d];
                                let className = 'row';
                                if (d === 'honors') {
                                    value = value.split(',');
                                    className += ' honors'
                                }
                                    return (<div className={className} key={i}>
                                                <div className="label">{labels[d]}</div>
                                                <div className="value">
                                                    {
                                                        value.map ? value.map((d, i) => {
                                                            return <span key={i}>{d}<br/></span>;
                                                        }) : <div className="inner">{value}</div>
                                                    }
                                            </div>
                                            <div className="line"></div>
                                    </div>)
                            })
    
                        }
                    </div>
                </div>
            </div>)

            
        }else if(infoType === 'player'){

        }

        return <div className="app">{result}</div>
    }
}

export default App;