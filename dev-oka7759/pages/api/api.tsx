import axios from 'axios';
const baseURL = 'http://localhost:4000/';

export async function getSerch(payload: object) {
  return await axios.get(baseURL, { params: payload });
}

export async function getList() {
  return await axios.get(`${baseURL}accounts`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImExQG5hdmVyLmNvbSIsImlhdCI6MTY2ODQ5NDgyOCwiZXhwIjoxNjY4NDk4NDI4LCJzdWIiOiIxMDMifQ.JDU4ez0bheG1GOgH70ID0dAFJrcECGRhlGKtd6S9PCE',
    },
  });
}
export async function getUserInfo() {
  return await axios.get(`${baseURL}users`, {
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImExQG5hdmVyLmNvbSIsImlhdCI6MTY2ODQ5NDgyOCwiZXhwIjoxNjY4NDk4NDI4LCJzdWIiOiIxMDMifQ.JDU4ez0bheG1GOgH70ID0dAFJrcECGRhlGKtd6S9PCE',
    },
  });
}
