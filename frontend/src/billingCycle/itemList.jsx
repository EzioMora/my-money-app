import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "../common/layout/grid";
import Input from "../common/form/input";
import If from "../common/operator/if";

import {
  Field,
  arrayInsert as arrayInsertActionCreator,
  arrayRemove as arrayRemoveActionCreator,
} from "redux-form";

class CreditList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", this.props.field, index, item);
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove("billingCycleForm", this.props.field, index);
    }
  }

  render() {
    console.log(this.props.field);
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>

          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.props.list
                ? this.props.list.map((item, index) => (
                    <tr key={item._id}>
                      <th>
                        <Field
                          name={`${this.props.field}[${index}].name`}
                          placeholder="Informe o nome"
                          readOnly={this.props.readOnly}
                          component={Input}
                        />
                      </th>

                      <th>
                        <Field
                          name={`${this.props.field}[${index}].value`}
                          placeholder="Informe o valor"
                          readOnly={this.props.readOnly}
                          component={Input}
                        />
                      </th>

                      <If test={this.props.showStatus}>
                        <th>
                          <Field
                            name={`${this.props.field}[${index}].status`}
                            placeholder="Informe o status"
                            readOnly={this.props.readOnly}
                            component={Input}
                          />
                        </th>
                      </If>

                      <th>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => this.add(index + 1)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => this.add(index + 1, item)}
                        >
                          <i className="fa fa-clone"></i>
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.remove(index)}
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </th>
                    </tr>
                  ))
                : false}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    arrayInsert(form, field, index, value) {
      const action = arrayInsertActionCreator(form, field, index, value);
      dispatch(action);
    },
    arrayRemove(form, field, index) {
      const action = arrayRemoveActionCreator(form, field, index);
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(CreditList);
