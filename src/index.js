import React from 'react';
import { render } from 'react-dom';

// ./ pra dizer que está referenciando um arquivo local e não um módulo.
import App from './App';

render(<App />, document.getElementById('app'));
