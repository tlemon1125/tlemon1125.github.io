import ReactDOM from 'react-dom/client';
import React from 'react';

export function renderDOM(app) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>
    );
}

export function renderView(parent, Views) {
    parent.state = parent.state || {};
    const { view } = parent.state;
    const View = Views[view];
    const Wrapper = Views['Wrapper'];
    const props = {...parent.props, ...parent.state, parent};
    const content = <View {...props} />;
    return <Wrapper {...{content}}/>;
}