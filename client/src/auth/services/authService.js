import axios from 'axios';

/**
 * AJAX: post:login
 * @param {String} login
 * @param {String} password
 */
export async function login(login, password) {
  const response = await axios.post(
      'login', {login: login, password: password});
  axios.defaults.headers.common['Authorization'] =
     `Bearer ${response.data.token}`;
  return true;
}
