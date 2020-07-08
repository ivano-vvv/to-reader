import React, { Component } from "react";
import { connect } from "react-redux";
import { getSavedArticles } from "../../redux/thunks";
import Content from "../display/content";
import Welcome from "../display/welcome";

class ContentContainer extends Component {
  componentDidMount() {
    this.props.getSavedArticles(this.props.filter);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.props.getSavedArticles(this.props.filter);
    }
  }

  render() {
    if (
      this.props.articlesPack.length === 0 &&
      !this.props.filter.isFirstList &&
      !this.props.filter.isReadList &&
      !this.props.filter.isUnreadList
    ) {
      return <Welcome />;
    } else {
      return <Content articlesPack={this.props.articlesPack} />;
    }
  }
}

const mapStateToProps = (state) => ({
  articlesPack: state.articlesPack,
  filter: state.filter,
});

const actions = {
  getSavedArticles,
};

export default connect(mapStateToProps, actions)(ContentContainer);
