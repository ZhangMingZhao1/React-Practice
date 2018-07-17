import react, { Fragment, Component} from 'react';
import {Link} from 'dva/router';
import styles from './index.less' ;
import logo from '../../assets/logo.png';
import magic2 from '../../assets/magic.png';
import foot from '../../assets/foot.png';
import playagain from '../../assets/playagain.png';
import footButton from '../../assets/footButton.png';
import bgO1 from '../../assets/share_bg.png';


class Page0 extends Component {
	constructor() {
		super()
		this.state = {
			play: ''
		}
	}

	componentDidMount() {
		this.renderPlay();
	}

	renderPlay() {
		setTimeout(() => {
			this.setState({
				play: 'play1'
			})
		}, 1500);
		setTimeout(() => {
			this.setState({
				play: 'play2'
			})
		}, 2000);
		setTimeout(() => {
			this.setState({
				play: 'play3'
			})
		}, 2500);
		setTimeout(() => {
			this.setState({
				play: 'play4'
			})
		}, 3000);
		setTimeout(() => {
			this.setState({
				play: 'play5'
			})
		}, 3500);
		setTimeout(() => {
			this.setState({
				play: 'play6'
			})
		}, 4000);
	}

	replay = () => {
		this.setState({
			play: ''
		},() => {
			this.renderPlay();
		})
	}

	render() {
		const { play} = this.state;
		return (
			<Fragment>
				<div className={styles.turnBox}>
					<img src={bgO1} className={styles.turnBox0}></img>
				</div>
				<div className={styles.pcontainer}>
					<div className={styles.logo}><img src={logo} alt="" /></div>
					<div className={styles.textBoxFa}>
						<div className={`${styles.textBox} ${styles.textBoxDelay1} ${play == 'play1' ? styles.show : ''}`}>
							<div>2018</div>
							<div className={`${styles.textBox32}`}>俄罗斯世界杯</div>	
						</div>
						<div className={`${styles.textBox} ${styles.textBoxDelay1} ${play == 'play2' ? styles.show : ''}`}>共169粒进球</div>
						<div className={`${styles.textBox} ${styles.textBoxDelay1} ${play == 'play3' ? styles.show : ''}`}>
							<div>左脚50粒</div>
							<div className={`${styles.textBox32}`}>33%</div>
						</div>
						<div className={`${styles.textBox} ${styles.textBoxDelay1} ${play == 'play4' ? styles.show : ''}`}>
							<div>右脚脚90粒</div>
							<div className={`${styles.textBox42}`}>60%</div>
						</div>
						<div className={`${styles.textBox} ${styles.textBoxDelay1} ${play == 'play5' ? styles.show : ''}`}>
							<div>头球10粒</div>
							<div className={`${styles.textBox52}`}>7%</div>
						</div>
					</div>

					<div className={`${styles.centerBox} ${play == 'play6' ? styles.show : ''}`} >
						<div className={styles.imageBox1}>
							<img src={magic2} alt="" />
						</div>
						<div className={styles.imageBox2}>
							<img src={foot} alt="" />
						</div>

						<div className={styles.againBox} onClick={this.replay}>
							<img src={playagain} alt="" />
							<span>在看一遍</span>
						</div>
						<Link to="/page1" className={styles.footButtonBox}>
							<img src={footButton} alt="" />
						</Link>
					</div>
				
				</div>
			</Fragment>
		)
	}
}

export default Page0;