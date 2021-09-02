import { initialize } from "redux-form";

export const selectTabAction = (tabId) => {
  return {
    type: "TAB_SELECTED",
    payload: tabId,
  };
};

export const showTabsAction = (...tabId) => {
  const tabsToShow = {};
  tabId.forEach((id) => (tabsToShow[id] = true));

  return {
    type: "TAB_SHOWED",
    payload: tabsToShow,
  };
};

// refatorar codigo duplicado
export const showUpdateAction = (billingCycle) => {
  return [
    showTabsAction("tabUpdate"),
    selectTabAction("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
};

export const showDeleteAction = (billingCycle) => {
  return [
    showTabsAction("tabDelete"),
    selectTabAction("tabDelete"),
    initialize("billingCycleForm", billingCycle),
  ];
};
