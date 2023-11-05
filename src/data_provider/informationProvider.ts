import { GetListResult } from "ra-core/dist/cjs/types";
import {
  CreateParams,
  CreateResult,
  DeleteParams,
  DeleteResult,
  fetchUtils,
  GetOneParams,
  GetOneResult,
  RaRecord,
  UpdateParams,
  UpdateResult,
} from "react-admin";

export const informationGetList = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
): Promise<GetListResult<RaRecord>> => {
  const url = `${apiUrl}/information/`;
  const { json } = await httpClient(url);
  return {
    data: json,
    total: json.length,
  };
};

export const informationGetOne = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: GetOneParams,
): Promise<GetOneResult<RaRecord>> => {
  const url = `${apiUrl}/information/${params.id}`;
  const { json } = await httpClient(url);
  return { data: json };
};

export const informationCreate = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: CreateParams,
): Promise<CreateResult<RaRecord>> => {
  const { json } = await httpClient(`${apiUrl}/information/`, {
    method: "POST",
    body: JSON.stringify(params.data),
  });
  return { data: json };
};

export const informationUpdate = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: UpdateParams,
): Promise<UpdateResult<RaRecord>> => {
  const { json } = await httpClient(`${apiUrl}/information/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(params.data),
  });
  return { data: json };
};

export const informationDelete = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: DeleteParams,
): Promise<DeleteResult<RaRecord>> => {
  const { json } = await httpClient(`${apiUrl}/information/${params.id}`, {
    method: "DELETE",
  });
  return { data: json };
};
