import * as React from 'react';
import { render } from 'react-dom';
import { Provider, onError } from "mobx-react";
import stores from "./stores";

import App from "./components";
import { isDev } from 'Utils'
import shortcuts from "../middleware/shortcuts";

onError((err: any) => {
	console.log('Mobx error: ', err);
});

shortcuts();

let root: string = isDev ? 'app' : 'react-page';

render(
	<Provider {...stores} >
		<App />
	</Provider>,
	document.getElementById(root)
)