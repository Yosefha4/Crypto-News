import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "39073a3a11msh626069970ef60ecp11d9f7jsn6618eec0ae38",
};


const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// console.log(createRequest);

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails : builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),

    }),
    getCryptoHistory : builder.query({
      query: ({coinId,timePeriod}) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),

    })
  }),
});

export const  {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery}  = cryptoApi;
