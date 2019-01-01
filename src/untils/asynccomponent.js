import * as React from 'react';

const AsyncComponent = (loadComponent) => (
    class AsyncCom extends React.Component{
        state = {
            Component: null,
        };

        componentWillMount(){
            loadComponent()
                .then(module => module.default)
                .then((Component) => {
                    this.setState({Component});
                })
                .catch((err) => {
                    console.log(`cannot fount Component <AsyncComponent/>`);
                    throw err;
                })
        }
        render(){
            const {Component} = this.state;
            return (Component) ? <Component {...this.props} /> : null;
        }
    }
);

export default AsyncComponent;