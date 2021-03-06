import React, {Component} from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Polls from "../components/polls/Polls";
import Home from "../components/Home";
import PollForm from "./PollForm";
import NotFound from "../components/NotFound";

class MainContent extends Component {
	render() {
		const { isUserAuthenticated, user } = this.props;
		return(
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/polls" component={Polls} />
				<Route exact path="/myPolls" component={Polls} />
				<Route exact path="/newPoll" render={(props) => (
				  <PollForm {...props} isUserAuthenticated={isUserAuthenticated} user={user}  />
				)} />
				<Route render={() =>
					<NotFound />
				}
				/>
			</Switch>
		);
	}
}

function mapStateToProps(state) {
  const { isUserAuthenticated, user } = state;
  return {
    isUserAuthenticated,
		user
  };
}

MainContent.propTypes = {
	isUserAuthenticated: PropTypes.bool,
	user: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(MainContent));
