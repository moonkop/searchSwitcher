import {Component, h, render} from 'preact'

interface AppState {
	searchInput:string;
	url:string;
}


let urlMap = {
	baidu: 'baidu.com/s?wd=',
	google: 'google.com/search?q=',
	bing: 'bing.com/search?q=',
}

class App extends Component<{}, AppState> {


	constructor(props) {
		super(props);
		this.state = {
			searchInput:'',
			url:''
		}
	}


	goSearch(engine) {
		let href =  'https://' + urlMap[engine] + this.state.searchInput;
		//window.location.href = 'https://' + urlMap[engine] + this.state.searchInput;
		this.setState({url: href})
	}


	render() {
		return (
			<div className='content'>
				<input type="text" id='input' value={this.state.searchInput} onChange={(e) => {
					this.setState({searchInput: e.currentTarget.value})
				}}/>
				<button onClick={this.goSearch.bind(this, 'baidu')}>baidu</button>
				<button onClick={this.goSearch.bind(this, 'google')}>google</button>
				<button onClick={this.goSearch.bind(this, 'bing')}>bing</button>
				{this.state.url && <iframe src={this.state.url}></iframe>}
			</div>
		);
	}
}


render(
	<App/>,
	document.getElementById('root')
)




