import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//Create an API using RTK Query
export const janeAustenApi = createApi({
  //Define the reducer path
  reducerPath: "janeAustenApi",
  //Set the base URL for API requests
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    //Set headers
    prepareHeaders(headers) {
      headers.set("Content-type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //Define our endpoints for the API
    getCharacters: builder.query({
      //get all characters
      query: () => "/characters",
    }),

    getSingleCharacter: builder.query({
      //get single character by id
      query: (characterId) => `/characters/${characterId}`,
    }),

    createCharacter: builder.mutation({
      //create a new character
      query: (data) => ({
        url: "/characters",
        method: "POST",
        body: {...data },
      }),
    }),

    updateCharacter: builder.mutation({
      //update characters
      query: (characterId) => ({
        url: `/characters/${characterId}`,
        method: "PATCH",
        body: {...characterId},
      }),
    }),

    deleteCharacter: builder.mutation({
      //delete character
      query: (characterId) => ({
        url: `/characters/${characterId}`,
        method: "DELETE",
        body: {...characterId},
      }),
    }),

    getBooks: builder.query({
      //get all books
      query: () => "/books",
    }),

    getOutfits: builder.query({
      //get all outfits
      query: () => "/outfits",
    }),
  }),
});

//Export hooks for each endpoint
export const {
  useGetCharactersQuery,
  useGetSingleCharacterQuery,
  useCreateCharacterMutation,
  useUpdateCharacterMutation,
  useDeleteCharacterMutation,
  useGetBooksQuery,
  useGetOutfitsQuery,
} = janeAustenApi;
