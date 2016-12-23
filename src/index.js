import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream/index';
import QuestionMaster from './components/QuestionMaster/index';

const tracks = [
	{
		title: 'Some track'
	},
	{
		title: 'Some other track'
	}
];

const store = configureStore();

// store.dispatch(actionCreator(payload));
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
	<Provider store={store}>
		
		<QuestionMaster />
	</Provider>,
	document.getElementById('app')
);