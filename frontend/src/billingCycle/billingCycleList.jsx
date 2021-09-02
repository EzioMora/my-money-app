import React, { Component } from "react";
import { connect } from "react-redux";

import { getListAction } from "../store/actions/billingCycle";
import { showDeleteAction, showUpdateAction } from "../store/actions/tab";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    const { list } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Més</th>
            <th>Ano</th>
            <th className="table-actions">Açôes</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.month}</td>
              <td>{item.year}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => this.props.showUpdate(item)}
                >
                  <i className="fa fa-pencil"></i>
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => this.props.showDelete(item)}
                >
                  <i className="fa fa-trash-o"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });

const mapDispatchToProps = (dispatch) => {
  return {
    getList() {
      const action = getListAction();
      dispatch(action);
    },
    showUpdate(billingCycle) {
      const action = showUpdateAction(billingCycle);
      dispatch(action);
    },
    showDelete(billingCycle) {
      const action = showDeleteAction(billingCycle);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
