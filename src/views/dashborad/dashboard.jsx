/**
 * @author: Michael
 * @date: 2017-07-19 13:56:48
 * @last modified by: Michael
 * @last modified time: 2017-07-19 13:56:48
 * @gitHub: https://github.com/maxsmu
*/
import React from 'react';
// import { push } from 'react-router-redux';
// import { connect } from 'react-redux';
import { HeaderNav } from '@components/HeaderNav';

class Dashboard extends React.Component {
	render() {
		return (
			<section>
				<HeaderNav />
				111
				{this.props.children}
			</section>
		)
	}
}

export default Dashboard;
