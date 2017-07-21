/**
 * @author: Michael
 * @date: 2017-07-19 13:56:48
 * @last modified by: Michael
 * @last modified time: 2017-07-19 13:56:48
 * @gitHub: https://github.com/maxsmu
*/
import React from 'react';
import { PanelItem, PanelWrapper } from '@components/panel';
import { Echarts } from '@components/echarts';
import cssStyles from './dashboard.scss';

import option from './echartsConfig.js';
// import { push } from 'react-router-redux';
// import { connect } from 'react-redux';

export default class Dashboard extends React.Component {
	render() {
		// option.series.forEach(serie => {
		// 	serie.data.forEach(item => {

		// 	})
		// })

		return (
			<section className={cssStyles.container}>
				<PanelWrapper>
					<PanelItem iconfont={'icon-mating-log'} description={'hshshshs'} />
					<PanelItem icon={'heart-o'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
					<PanelItem icon={'code'} pre={'￥'} value={12120} unit={'头'} description={'hshshshs'} />
				</PanelWrapper>
				<Echarts type="calendar-pie" option={option} style={{ width: '100%', height: 500 }} />
			</section>
		)
	}
}
