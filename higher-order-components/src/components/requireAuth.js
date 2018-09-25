import React, { Component } from 'react';
import { connect } from 'react-redux';


export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // Called when rendered first time
        componentDidMount() {
            console.log('ComposedComponent: componentDidMount');
            this.shouldNavigateAway();
        }

        // Called when component gets new props
        componentDidUpdate() {
            console.log('ComposedComponent: componentDidUpdate');
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            console.log('ComposedComponent: shouldNavigateAway');

            if (!this.props.auth) {
                console.log('Not logged in! Redirecting to index.');
                this.props.history.push('/')
            } else {
                console.log('Welcome!');
            }
        }

        render() {
            // Super important! Pass along all props that come from above.
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        console.log('mapStateToProps', state);
        return {
            auth: state.auth
        };
    }

    return connect(mapStateToProps)(ComposedComponent);
};

