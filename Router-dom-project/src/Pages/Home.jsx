import React from "react";
import axios from "axios";
import MovieList from "../Component/MovieList";
import SerchFrom from "../Component/SerchFrom";
import { apiKey } from "../constant";
import { useLoaderData } from "react-router-dom";
export async function loader({ request }) {
  const url = new URL(request.url);
  const serchparam = url.searchParams.get("serch") || "marvel";
  try {
    const newUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${serchparam}`;
    const responce = await axios.get(newUrl);
    return { responce, serchparam, isError: false, errorMsg: "" };
  } catch (error) {
    return {
      responce: null,
      serchparam,
      isError: true,
      errorMsg: error.response.data.Error,
    };
  }
}

function Home() {
  const { responce, serchparam } = useLoaderData();
  return (
    <>
      <SerchFrom serchparam={serchparam} />
      <MovieList />
    </>
  );
}

export default Home;
