/**
 * @author: Michael
 * @date: 2017-07-19 14:15:23
 * @last modified by: Michael
 * @last modified time: 2017-07-19 14:15:23
 * @gitHub: https://github.com/maxsmu
*/
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainLayout } from '@layout/main-layout';

export const Router = (
	<Switch>
		<Route path="/" component={MainLayout} />
	</Switch>
)
