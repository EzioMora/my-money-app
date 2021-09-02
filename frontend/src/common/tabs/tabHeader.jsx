import React, { Component } from "react";
import { connect } from "react-redux";

import { selectTabAction } from "../../store/actions/tab";

import If from "../operator/if";

class TabHeader extends Component {
  render() {
    const { selectTab } = this.props;
    const selected = this.props.tab.selected === this.props.target;
    const visible = this.props.tab.visible[this.props.target] || false;

    return (
      <If test={visible}>
        <li className={selected ? "active" : ""}>
          <a
            href="javascript:;"
            data-toggle="tab"
            data-target={this.props.target}
            onClick={() => selectTab(this.props.target)}
          >
            <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
          </a>
        </li>
      </If>
    );
  }
}

const mapStateToProps = (state) => ({
  tab: state.tab,
});

const mapDispatchToProps = (dispatch) => {
  return {
    selectTab(tabId) {
      const action = selectTabAction(tabId);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
