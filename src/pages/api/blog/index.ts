import type { APIRoute } from "astro";

const usernames = ["Sarah", "Chris", "Dan", "Yan", "Elian"];

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      usernames,
    })
  );
};
