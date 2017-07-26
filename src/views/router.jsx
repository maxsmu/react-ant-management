/**
 * @author: Michael
 * @date: 2017-07-19 14:15:23
 * @last modified by: Michael
 * @last modified time: 2017-07-19 14:15:23
 * @gitHub: https://github.com/maxsmu
*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '@view/dashboard';
import { Archives } from '@view/archives';
import { Prevention } from '@view/prevention';
import { Drug } from '@view/drug';

export const Router = (
	<Switch>
		<Route path="/dashboard" component={Dashboard} />
		<Route path="/archives" component={Archives} />
		<Route path="/prevention" component={Prevention} />
		<Route path="/drug" component={Drug} />
	</Switch>
)
