import logo from '../../assets/logo.png';
import { Component, Fragment } from "react";
import {connect} from 'dva';
import {Link} from 'dva/router';
import playagainImg from '../../assets/play.png';
import postersImg from '../../assets/posters.png';
import Data from '../../../public/players.json';
import styles from './index.less';
import bgO1 from '../../assets/share_bg.png';

class Page1 extends Component {
	constructor() {
		super()
		this.state = {
			imgUrl:''
		}
  }

  componentDidMount() {
    this.renderCards();
  }
	scaleBig = (cur) => {
		console.log(cur)
		this.refs[cur].classList.add(`${styles.big}`);
	}
	closeBig = (cur) => {
		this.refs[cur].classList.remove(`${styles.big}`);
	}
  renderCards() {
		const that = this;
		let last;
    // const { playerSlideId} = this.props;
    this.mySwiper = new Swiper(this.refs.box, {
			slidesPerView: 5,
			spaceBetween: 20,
			loop:true,
      on: {
        slideChange() {
					if(last) {
						that.closeBig(last);
					}
					console.log(this.realIndex)
					let cur = this.realIndex;
					if(cur<=12) cur+=2;
					else if(cur===13) cur = 0;
					else if(cur===14) cur = 1;
					that.scaleBig(cur);
					that.setState({imgUrl:Data[cur].bodyUrl});
          last = cur;
          console.log("last", last,Data[last].name)
          that.props.dispatch({
            type: 'example/save',
            payload: {
              playerSlideId: last,
              playerName:Data[last].name
            }
          })
        },
      },
    })
	}
	
  renderItem(data) {
    return data.map((item,index) => {
      return (<div className="swiper-slide" key={item.name}>
            <div ref={index} className={styles.avatar}>
              <img src={item.avatarUrl} alt="" />
            </div>
            <div className={styles.name}>{item.name}</div>
        </div>
      
      )
    })
  }


  render() {
    return (
      <Fragment>
        <div className={styles.turnBox}>
          <img src={bgO1} className={styles.turnBox0}></img>
        </div>
      
        <div className={styles.page1}>
          <div className={styles.logo}><img src={logo} alt="" /></div>
          <div className={styles.card}>
            <div className={styles.bgImage}>
              <img src={this.state.imgUrl} alt="" />
            </div>
            <div ref="box" className="swiper-container">
              <div className="swiper-wrapper">
                {this.renderItem(Data)}
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
            <Link to="/page2" className={styles.button} >看他的进球</Link>
          </div>
          
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(Page1);