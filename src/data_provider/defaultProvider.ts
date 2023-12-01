import { GetListResult } from "ra-core/dist/cjs/types";
import {
  CreateParams,
  CreateResult,
  DeleteParams,
  DeleteResult,
  fetchUtils, GetManyResult,
  GetOneParams,
  GetOneResult,
  RaRecord,
  UpdateParams,
  UpdateResult
} from "react-admin";

export const defaultGetList = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  resource: string,
): Promise<GetListResult<RaRecord>> => {
  const url = `${apiUrl}/${resource}`;
  const { json } = await httpClient(url);
  return {
    data: json,
    total: json.length,
  };
};

export const defaultGetOne = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  resource: string,
  params: GetOneParams,
): Promise<GetOneResult<RaRecord>> => {
  const url = `${apiUrl}/${resource}/${params.id}`;
  const { json } = await httpClient(url);
  return { data: json };
};

export const defaultGetMany = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  resource: string,
): Promise<GetManyResult<RaRecord>> => {
  const url = `${apiUrl}/${resource}`;
  const { json } = await httpClient(url);
  return {
    data: json
  };
};

export const defaultCreate = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  resource: string,
  params: CreateParams,
): Promise<CreateResult<RaRecord>> => {
  const { json } = await httpClient(`${apiUrl}/${resource}`, {
    method: "POST",
    body: JSON.stringify(params.data),
  });
  return { data: json };
};

export const defaultUpdate = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  resource: string,
  params: UpdateParams,
): Promise<UpdateResult<RaRecord>> => {
  const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(params.data),
  });
  return { data: json };
};

export const defaultDelete = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  resource: string,
  params: DeleteParams,
): Promise<DeleteResult<RaRecord>> => {
  const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
    method: "DELETE",
  });
  return { data: json };
};
