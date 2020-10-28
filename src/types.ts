import { DataQuery, DataSourceJsonData } from '@grafana/data';

interface JsonField {
  name: string;
  jsonPath: string;
}

export interface JsonApiQuery extends DataQuery {
  fields: JsonField[];
  cacheDurationSeconds: number;
  channelID: string;
}

export interface JsonApiVariableQuery extends DataQuery {
  jsonPath: string;
}

export const defaultQuery: Partial<JsonApiQuery> = {
  fields: [{ name: '', jsonPath: '' }],
  cacheDurationSeconds: 300,
  channelID: '20001',
};

export interface JsonApiDataSourceOptions extends DataSourceJsonData {
  queryParams?: string;
}
