/* eslint-disable class-methods-use-this */

import { LoginParameters } from "./types";

import baseURL from "../baseUrl";
import getAccessToken from "../../accessToken";

class Authentication {
  async login(data: LoginParameters) {
    const response = await fetch(`${baseURL}/user/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok || response.status === 401) {
      return response.json();
    }

    return { message: `${response.statusText}. unable to login` };
  }

  async getProfile() {
    const accessToken = getAccessToken();

    const response = await fetch(`${baseURL}/user/profile`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      return response.json();
    }

    return { message: `${response.statusText}. unable to get profile` };
  }
}

const instance = new Authentication();

export default instance;
