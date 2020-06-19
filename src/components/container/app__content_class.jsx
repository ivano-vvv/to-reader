import React, { Component } from "react";
import { connect } from "react-redux";
import { getSavedArticles } from "../../redux/thunks";
import Content from "../display/content";

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
    return <Content articlesPack={this.props.articlesPack} />;
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
