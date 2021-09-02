import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

import { initAction } from "../store/actions/billingCycle";

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;

    return {
      sumOfCredits: this.props.credits.map((c) => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map((d) => +d.value || 0).reduce(sum),
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
            component={LabelAndInput}
            readOnly={readOnly}
          />

          <Field
            type="number"
            name="month"
            label="Més"
            cols="12 4"
            placeholder="Informe o mês"
            component={LabelAndInput}
            readOnly={readOnly}
          />

          <Field
            type="number"
            name="year"
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            component={LabelAndInput}
            readOnly={readOnly}
          />

          <Summary credit={sumOfCredits} debit={sumOfDebts} />

          <ItemList
            cols="12 6"
            legend="Créditos"
            field="credits"
            readOnly={readOnly}
            list={credits}
          />

          <ItemList
            cols="12 6"
            legend="Débitos"
            field="debts"
            readOnly={readOnly}
            showStatus={true}
            list={debts}
          />
        </div>

        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.color}`}>
            {this.props.submitLabel}
          </button>

          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

// decorando o componennt com o reducer de redux-form
BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false,
})(BillingCycleForm);

// metodo para selecionar os valores dentro do formulario
const selector = formValueSelector("billingCycleForm");

const mapStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});

const mapDispatchToProps = (dispatch) => {
  return {
    init() {
      const action = initAction();
      dispatch(action);
    },
  };
};

// decorando o componennt com connectdo do react-redux
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
