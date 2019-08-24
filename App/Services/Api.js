// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://lets-gas-webservice.herokuapp.com/api/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRoot = () => api.get('')
  const setAuthToken = userAuth => api.setHeader("Authorization", "Bearer " + userAuth);
  const removeAuthToken = () => api.setHeader("Authorization", "");
  const getUser = () => api.get("users/profile");
  const signup = body => api.post("users/signup/", body);
  const sigin = body => api.post("users/signin/", body);
  const getProductList = () => api.get("/products/");
  const getProductByType = params => api.get(`/products/type/${params}/`);
  const getProductById = id => api.get(`/products/${id}/`);
  const getFacilitiesList = params => api.get("/facilities/", params);
  const getFacilitiesByType = (params, type) => api.get(`/facilities/type/${type}/`, params);
  const getFacilitiesById = id => api.get(`/facilities/${id}/`);
  const getPacketList = () => api.get("/bundles/");
  const getPacketByType = params => api.get(`/bundles/type/${params}/`);
  const getPacketById = id => api.get(`/bundles/${id}/`);
  const getStationList = () => api.get("/stations/");
  const getStationByType = (params, type) => api.get(`/stations/type/${type}/`, params);
  const getStationById = id => api.get(`/stations/${id}/`);
  const getOrderList = params => api.get("/orders/", params);
  const getOrderById = id => api.get(`/orders/${id}/`);
  const postOrder = body => api.post("/orders/", body);
  const getSubcriptionList = params => api.get("/subscriptions/", params);
  const getSubcriptionByType = params => api.get(`/subscriptions/type/${params}/`);
  const getSubcriptionById = id => api.get(`/subscriptions/${id}/`);

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getUser,
    setAuthToken,
    removeAuthToken,
    signup,
    sigin,
    getProductList,
    getProductByType,
    getProductById,
    getFacilitiesList,
    getFacilitiesByType,
    getFacilitiesById,
    getPacketList,
    getPacketByType,
    getPacketById,
    getStationList,
    getStationByType,
    getStationById,
    getOrderList,
    getOrderById,
    postOrder,
    getSubcriptionList,
    getSubcriptionByType,
    getSubcriptionById,
  }
}

// let's return back our create method as the default.
export default {
  create
}
