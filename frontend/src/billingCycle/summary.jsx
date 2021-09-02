import React from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default ({ credit, debit }) => (
  <Grid cols="12">
    <fieldset>
      <legend>Resumo</legend>
      <Row>
        <ValueBox
          cols="12 4"
          color="green"
          value={credit}
          text="Total de Créditos"
          icon="bank"
        />
        <ValueBox
          cols="12 4"
          color="red"
          value={debit}
          text="Total de Débitos"
          icon="credit-card"
        />
        <ValueBox
          cols="12 4"
          color="blue"
          value={credit - debit}
          text="Total consolidado"
          icon="money"
        />
      </Row>
    </fieldset>
  </Grid>
);
