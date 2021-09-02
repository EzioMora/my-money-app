import React, { Component } from "react";
import { connect } from "react-redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tabs/tabs";
import TabsHeader from "../common/tabs/tabsHeader";
import TabsContent from "../common/tabs/tabsContent";
import TabHeader from "../common/tabs/tabHeader";
import TabContent from "../common/tabs/tabContent";
import List from "./billingCycleList";
import Form from "./billingCycleForm";

import {
  initAction,
  createAction,
  deleteAction,
  updateAction,
} from "../store/actions/billingCycle";

class billingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <div className="billingCycle">
        <ContentHeader title="Ciclo de Pagametos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>

            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>

              <TabContent id="tabCreate">
                <Form
                  onSubmit={this.props.create}
                  color="primary"
                  submitLabel="Incluir"
                />
              </TabContent>

              <TabContent id="tabUpdate">
                <Form
                  onSubmit={this.props.update}
                  color="info"
                  submitLabel="Atualizar"
                />
              </TabContent>

              <TabContent id="tabDelete">
                <Form
                  onSubmit={this.props.delete}
                  color="danger"
                  submitLabel="Eliminar"
                  readOnly={true}
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create(values) {
      const action = createAction(values);
      dispatch(action);
    },
    update(values) {
      const action = updateAction(values);
      dispatch(action);
    },
    delete(values) {
      const action = deleteAction(values);
      dispatch(action);
    },
    init() {
      const action = initAction();
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(billingCycle);
