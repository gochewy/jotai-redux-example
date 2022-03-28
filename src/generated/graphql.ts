import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, { SWRConfiguration as SWRConfigInterface, Key as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CallToAction = {
  __typename?: 'CallToAction';
  text: Scalars['String'];
  url: Scalars['String'];
};

export type Page = {
  __typename?: 'Page';
  cta: CallToAction;
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  page: Page;
  widgets: Array<Widget>;
};

export type Widget = {
  __typename?: 'Widget';
  id: Scalars['Int'];
  name: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
};

export type GetContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContentQuery = { __typename?: 'Query', widgets: Array<{ __typename?: 'Widget', id: number, name: string }>, page: { __typename?: 'Page', title: string, subtitle: string, cta: { __typename?: 'CallToAction', text: string, url: string } } };


export const GetContentDocument = gql`
    query GetContent {
  widgets {
    id
    name
  }
  page {
    title
    subtitle
    cta {
      text
      url
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetContent(variables?: GetContentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContentQuery>(GetContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetContent', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useGetContent(key: SWRKeyInterface, variables?: GetContentQueryVariables, config?: SWRConfigInterface<GetContentQuery, ClientError>) {
      return useSWR<GetContentQuery, ClientError>(key, () => sdk.GetContent(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;