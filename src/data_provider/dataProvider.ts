import { DataProvider, fetchUtils, Identifier } from "react-admin";
import {
  locationCreate,
  locationDelete,
  locationGetList,
  locationGetMany,
  locationGetOne,
  locationUpdate,
} from "./locationProvider";
import {
  defaultCreate,
  defaultDelete,
  defaultGetList,
  defaultGetMany,
  defaultGetOne,
  defaultUpdate,
} from "./defaultProvider";

const apiUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:8080";
const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  options = {
    ...options,
    headers: new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }),
  };
  return fetchUtils.fetchJson(url, options);
};

export const disableAccount = async (id: Identifier) => {
  await httpClient(`${apiUrl}/users/${id}/disable`, {
    method: "PUT",
  });
}

export const enableAccount = async (id: Identifier) => {
  await httpClient(`${apiUrl}/users/${id}/enable`, {
    method: "PUT",
  });
}

export const resetPassword = async (id: Identifier) => {
  await httpClient(`${apiUrl}/users/${id}/reset-password`, {
    method: "PUT",
  });
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
const AGHCampusDataProvider: DataProvider = {
  // @ts-ignore
  getList: async (resource) => {
    switch (resource) {
      case "locations":
        return locationGetList(httpClient, apiUrl);
      default:
        return defaultGetList(httpClient, apiUrl, resource);
    }
  },
  // @ts-ignore
  getOne: async (resource, params) => {
    switch (resource) {
      case "locations":
        return locationGetOne(httpClient, apiUrl, params);
      default:
        return defaultGetOne(httpClient, apiUrl, resource, params);
    }
  },
  // @ts-ignore
  getMany: async (resource) => {
    switch (resource) {
      case "locations":
        return locationGetMany(httpClient, apiUrl);
      default:
        return defaultGetMany(httpClient, apiUrl, resource);
    }
  },
  // @ts-ignore
  getManyReference: async () => Promise.resolve(),
  // @ts-ignore
  create: async (resource, params) => {
    switch (resource) {
      case "locations":
        return locationCreate(httpClient, apiUrl, params);
      default:
        return defaultCreate(httpClient, apiUrl, resource, params);
    }
  },
  // @ts-ignore
  update: async (resource, params) => {
    switch (resource) {
      case "locations":
        return locationUpdate(httpClient, apiUrl, params);
      default:
        return defaultUpdate(httpClient, apiUrl, resource, params);
    }
  },
  // @ts-ignore
  updateMany: async () => Promise.resolve(),
  // @ts-ignore
  delete: async (resource, params) => {
    switch (resource) {
      case "locations":
        return locationDelete(httpClient, apiUrl, params);
      default:
        return defaultDelete(httpClient, apiUrl, resource, params);
    }
  },
  // @ts-ignore
  deleteMany: async () => Promise.resolve(),
};

export default AGHCampusDataProvider;
