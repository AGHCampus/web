import { DataProvider, fetchUtils } from "react-admin";
import {
  informationCreate,
  informationDelete,
  informationGetList,
  informationGetOne,
  informationUpdate,
} from "./informationProvider";
import { locationCreate, locationDelete, locationGetList, locationGetOne, locationUpdate } from "./locationProvider";

const apiUrl = "http://localhost:8080";
const httpClient = fetchUtils.fetchJson;

/* eslint-disable @typescript-eslint/ban-ts-comment */
const AGHCampusDataProvider: DataProvider = {
  // @ts-ignore
  getList: async (resource) => {
    switch (resource) {
      case "information":
        return informationGetList(httpClient, apiUrl);
      case "location":
        return locationGetList(httpClient, apiUrl);
    }
  },
  // @ts-ignore
  getOne: async (resource, params) => {
    switch (resource) {
      case "information":
        return informationGetOne(httpClient, apiUrl, params);
      case "location":
        return locationGetOne(httpClient, apiUrl, params);
    }
  },
  // @ts-ignore
  getMany: async () => Promise.resolve(),
  // @ts-ignore
  getManyReference: async () => Promise.resolve(),
  // @ts-ignore
  create: async (resource, params) => {
    switch (resource) {
      case "information":
        return informationCreate(httpClient, apiUrl, params);
      case "location":
        return locationCreate(httpClient, apiUrl, params)
    }
  },
  // @ts-ignore
  update: async (resource, params) => {
    switch (resource) {
      case "information":
        return informationUpdate(httpClient, apiUrl, params);
      case "location":
        return locationUpdate(httpClient, apiUrl, params);
    }
  },
  // @ts-ignore
  updateMany: async () => Promise.resolve(),
  // @ts-ignore
  delete: async (resource, params) => {
    switch (resource) {
      case "information":
        return informationDelete(httpClient, apiUrl, params);
      case "location":
        return locationDelete(httpClient, apiUrl, params);
    }
  },
  // @ts-ignore
  deleteMany: async () => Promise.resolve(),
};

export default AGHCampusDataProvider;
