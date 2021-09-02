import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";

import { selectTabAction, showTabsAction } from "./tab";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {
  credits: [{}],
  debts: [{}],
};

export const getListAction = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
};

export const createAction = (values) => submit(values, "post");

export const updateAction = (values) => submit(values, "put");

export const deleteAction = (values) => submit(values, "delete");

const submit = (values, method) => {
  return (dispatch) => {
    const id = values._id ? values._id : "";

    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then((resp) => {
        toastr.success("Sucesso", "Operação realizada com sucesso");

        dispatch(initAction());
      })
      .catch((error) => {
        error.response.data.errors.forEach((error) =>
          toastr.error("Erro", error)
        );
      });
  };
};

export const initAction = () => {
  return [
    showTabsAction("tabList", "tabCreate"),
    selectTabAction("tabList"),
    getListAction(),
    initialize("billingCycleForm", INITIAL_VALUES),
  ];
};
