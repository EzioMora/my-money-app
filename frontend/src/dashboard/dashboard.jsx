import React, { Component } from "react";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

import dashboardAction from "../store/actions/dashboard";

import axios from "axios";
const BASE_URL = "http://localhost:3003/api";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              value={`R$ ${credit}`}
              text="Total de Créditos"
              icon="bank"
            />
            <ValueBox
              cols="12 4"
              color="red"
              value={`R$ ${debt}`}
              text="Total de Débitos"
              icon="credit-card"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              value={`R$ ${credit - debt}`}
              text="Valor Consolidado"
              icon="money"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.dashboard.summary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSummary() {
      const action = dashboardAction();
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
