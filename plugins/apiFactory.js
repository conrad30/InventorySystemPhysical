import apiFactory from '~/apis';


export default ({ $axios }, inject) => {

  $axios.setHeader('Content-Type', 'application/json');
  const apis = apiFactory($axios);
  inject('apis', apis);
}
