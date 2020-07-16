import dashboardApiFactory from "./dashboard";

const apiFactory = axios => ({
  dashboard: dashboardApiFactory(axios),
});

export default apiFactory;
