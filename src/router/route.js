import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  withRouter,
  Redirect,
} from 'react-router-dom';

const redirectUrl = '/';

const _filter = (...rest) => {
  console.info(rest);
  return true;
};

const route = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (<Route
    {...rest}
    render={
      (props) => {
        console.log('currentUrl:', props.match.url);
        // console.log(Component);
        return _filter({ ...rest, ...props }) ? <Component {...props} /> : <Redirect to={redirectUrl} />;
      }
    }
  />);
};

// export default route;
// export default connect(
//   state => ({ config: state.config }),
// )(route);
export default withRouter(connect(
  state => ({ config: state.config }),
)(route));

