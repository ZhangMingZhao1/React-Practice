import React, { Component } from 'react';
import CountUp, { startAnimation } from 'react-countup';
import $ from 'jquery';

import './App.less';
import avatar from '../assets/img/avatar.png';
import leftBar from '../assets/img/leftBar.png';
import rightBar from '../assets/img/rightBar.png';
import middleBar from '../assets/img/middleBar.png'
import empty from '../assets/img/empty.png';
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    animate () {

        const games = this.props.json.variables.games;

        let current = 500;
        let unit = 200;

        setTimeout(() => {
            $(this.refs.leftBar).animate({
                // left: `0`,
                 width: `429px`,
            }, unit);
        }, current)
        setTimeout(() => {
            $(this.refs.rightBar).animate({
                // left: `0`,
                 width: `429px`,
            }, unit);
        }, current)

        // current += unit;
        setTimeout(() => {
            $(this.refs.title).animate({
                // width: `584px`,
                opacity: 1,
            }, unit);
        }, current);

        current += unit / 2;
        setTimeout(() => {
            $(this.refs.titleText).animate({
                opacity: 1,
            }, unit);
            $('.aAvatar, .bAvatar').css({
                transform: `scale(1)`,
            });
        }, current);
        current += unit;

        //如果没有比赛记录
        if (!games) {
            setTimeout(() => {
                $('.emptyDom').animate({
                    opacity: 1,
                }, unit)
            }, current);
            current += unit;
        }

        // 比赛次数动画
        setTimeout(() => {
            $('.games').animate({
                opacity: 1,
            }, unit)
        }, current);
        setTimeout(() => {
            $(this.refs[`gameText`]).animate({
                opacity: 1,
            }, unit)
        }, current);
        current += unit;
        setTimeout(() => {
            $('.games .CountUp').show();
            startAnimation(this.refs.gc1);
            startAnimation(this.refs.gc2);
        }, current);
        current += unit;

        // 数据动画
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                $(this.refs[`row${i + 1}`]).animate({
                    // left: 0,
                    opacity: 1,
                }, unit);
            }, current);  
            setTimeout(() => {
                $(this.refs[`middleText${i + 1}`]).animate({
                    // left: 0,
                    opacity: 1,
                }, unit);
            }, current); 
        }
        current += unit;
        for (let i = 0; i < 5; i++) {
            const rc1 = this.refs[`rc${i + 1}-1`];
            const rc2 = this.refs[`rc${i + 1}-2`];
            setTimeout(() => {
                $(this.refs[`row${i + 1}`]).find('.CountUp').show();
                startAnimation(rc1);
                startAnimation(rc2);
            }, current);
        }
        //bar展开
        // console.log($('.infoCard').find('.row').length)
        // $('.infoCard').find('.row').each((index) => {
        //     // $item.find('.right .bar').removeClass('init');
        //     $('.infoCard').find('.row').eq(index)
        //     // .find('.right .bar').removeClass('init');
        //     console.log(index)
        // });

        for (let i = 0; i < 5; i++) {
            // const bc1 = this.refs[`bc${i + 1}-1`];
            // const bc2 = this.refs[`bc${i + 1}-2`];
            setTimeout(() => {
                $(`.infoCard .row:nth-child(${i+1}) .bar`).removeClass('init');
                // console.log($(`.infoCard .row:nth-child(${i}) .bar`))
            }, current);
            // setTimeout(() => {
            //     $(this.refs.leftBar).animate({
            //         // left: `0`,
            //          width: `429px`,
            //     }, unit);
            // }, current);
        }

        current += unit;
        console.log('最终时间:', current);
    }

    componentDidMount () {
        this.animate();
    }

    render () {
        const {json} = this.props;
        const {variables} = json;
        let aAvatar = variables.aTeamFlag || avatar;
        let bAvatar = variables.bTeamFlag || avatar;
        const unit = 0.5;

        const { 
            aTeamName,
            bTeamName,
            aTeamEnglishName,
            bTeamEnglishName,
            aTeamFlag,
            bTeamFlag,
            aTeamIcon,
            bTeamIcon,
            games,
            aWin,
            aLose,
            aDraw,
            aGoals,
            aLosses,
            bWin,
            bLose,
            bDraw,
            bGoals,
            bLosses
        } = variables;

        const totalGoals = aGoals + bGoals;
        const totalLosses = aLosses + bLosses;
        const gamesDom = games ? <div className="inner">
        <div className="games">
            <div className="left">
                <CountUp className="CountUp" start={0} end={games} duration={unit} ref={`gc1`} />
            </div>
            <div className="middle" ref={`gameText`}>比赛次数</div>
            <div className="right">
                <CountUp className="CountUp" start={0} end={games} duration={unit} ref={`gc2`} />
            </div>
        </div>
        <div>
        <div className="row" ref={`row1`}>
            <div className="left">
                <div className="bar init"  ref={`bc1-1`} style={{ width: aWin / games * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={aWin} duration={unit} ref={`rc1-1`} />
            </div>
            <div className="middle" ref={`middleText1`} >胜</div>
            <div className="right">
                <div className="bar init" ref={`bc1-2`} style={{ width: bWin / games * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={bWin} duration={unit} ref={`rc1-2`} />
            </div>
        </div>
        <div className="row" ref={`row2`}>
            <div className="left">
                <div className="bar init" ref={`bc2-1`} style={{ width: aLose / games * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={aLose} duration={unit} ref={`rc2-1`} />
            </div>
            <div className="middle" ref={`middleText2`} >负</div>
            <div className="right">
                <div className="bar init" ref={`bc2-2`} style={{ width: bLose / games * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={bLose} duration={unit} ref={`rc2-2`} />
            </div>
        </div>
        <div className="row" ref={`row3`}>
            <div className="left">
                <div className="bar init" ref={`bc3-1`} style={{ width: aDraw / games * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={aDraw} duration={unit} ref={`rc3-1`} />
            </div>
            <div className="middle" ref={`middleText3`} >平</div>
            <div className="right">
                <div className="bar init" ref={`bc3-2`} style={{ width: aDraw / games * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={bDraw} duration={unit} ref={`rc3-2`} />
            </div>
        </div>
        <div className="row" ref={`row4`}>
            <div className="left">
                <div className="bar init" ref={`bc4-1`} style={{ width: aGoals / totalGoals * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={aGoals} duration={unit} ref={`rc4-1`} />
            </div>
            <div className="middle" ref={`middleText4`} >进球数</div>
            <div className="right">
                <div className="bar init" ref={`bc4-2`} style={{ width: bGoals / totalGoals * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={bGoals} duration={unit} ref={`rc4-2`} />
            </div>
        </div>
        <div className="row" ref={`row5`}>
            <div className="left">
                <div className="bar init" ref={`bc5-1`} style={{ width: aLosses / totalLosses * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={aLosses} duration={unit} ref={`rc5-1`} />
            </div>
            <div className="middle" ref={`middleText5`} >失球数</div>
            <div className="right">
                <div className="bar init" ref={`bc5-2`} style={{ width: bLosses / totalLosses * 80 + '%' }}></div>
                <CountUp className="CountUp" start={0} end={bLosses} duration={unit} ref={`rc5-2`} />
            </div>
        </div>
        </div>
    </div> : <div className="emptyDom">
        <img className="empty" src={empty} />
        <div className="emptyTips">此前两队尚无正式比赛中的交手记录</div>
    </div>

        return <div className="app">
            <div className="leftBar" ref={`leftBar`} ><img src={leftBar} alt=""/><span>{aTeamName}</span></div>
            <div className="rightBar" ref={`rightBar`} ><img src={rightBar} alt=""/><span>{bTeamName}</span></div>
            <div className="middleBar" ref={`title`}><img src={middleBar} alt=""/><span ref={`titleText`}>交战记录</span></div>
            <div className="aAvatar"><img src={aAvatar} alt=""/></div>
            <div className="bAvatar"><img src={bAvatar} alt=""/></div>
            <div className="infoCard">{gamesDom}</div>
        </div>
    }
}

export default App;