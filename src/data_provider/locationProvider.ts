import { GetListResult } from "ra-core/dist/cjs/types";
import {
  CreateParams,
  CreateResult,
  DeleteParams,
  DeleteResult,
  fetchUtils,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  RaRecord,
  UpdateParams,
  UpdateResult,
} from "react-admin";

export const locationGetList = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
): Promise<GetListResult<RaRecord>> => {
  const url = `${apiUrl}/locations`;
  const { json } = await httpClient(url);
  return {
    data: json,
    total: json.length,
  };
};

export const locationGetOne = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: GetOneParams,
): Promise<GetOneResult<RaRecord>> => {
  const infoUrl = `${apiUrl}/locations/${params.id}`;
  const detailsUrl = `${apiUrl}/locations/${params.id}/details`;

  const json: RaRecord = await Promise.all([
    httpClient(infoUrl),
    httpClient(detailsUrl),
  ]).then(([info, details]) => {
    return {
      ...info.json,
      ...details.json,
      photos: details.json?.photos?.map((photo: string) => ({
        url: photo,
      })),
    };
  });

  return { data: json };
};

export const locationGetMany = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
): Promise<GetManyResult<RaRecord>> => {
  const url = `${apiUrl}/locations`;
  const { json } = await httpClient(url);
  return {
    data: json,
  };
};

export const locationCreate = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: CreateParams,
): Promise<CreateResult<RaRecord>> => {
  const parsedData = {
    ...params.data,
    photos: params.data.photos?.map((photo: { url: string }) => photo.url),
    coordinate: {
      latitude: params.data.latitude,
      longitude: params.data.longitude,
    },
  };
  const { json } = await httpClient(`${apiUrl}/locations`, {
    method: "POST",
    body: JSON.stringify(parsedData),
  });
  return { data: json };
};

export const locationUpdate = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: UpdateParams,
): Promise<UpdateResult<RaRecord>> => {
  const parsedData = {
    ...params.data,
    photos: params.data.photos?.map((photo: { url: string }) => photo.url),
    coordinate: {
      latitude: params.data.latitude,
      longitude: params.data.longitude,
    },
  };
  const { json } = await httpClient(`${apiUrl}/locations/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(parsedData),
  });
  return { data: json };
};

export const locationDelete = async (
  httpClient: typeof fetchUtils.fetchJson,
  apiUrl: string,
  params: DeleteParams,
): Promise<DeleteResult<RaRecord>> => {
  const { json } = await httpClient(`${apiUrl}/locations/${params.id}`, {
    method: "DELETE",
  });
  return { data: json };
};
