import type { APIRoute } from "astro";

const usernames = ["Sarah", "Chris", "Dan", "Yan", "Elian"];

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const { id } = params;

  if (id && (parseInt(id) < 0 || parseInt(id) >= usernames.length)) {
    return new Response(JSON.stringify({ message: "Parametro Invalido" }), {
      status: 404,
      statusText: "No Encontrado",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(
    JSON.stringify({
      name: usernames[id ? parseInt(id) : 0],
    })
  );
};

// export function getStaticPaths() {
//   return [
//     { params: { id: "0" } },
//     { params: { id: "1" } },
//     { params: { id: "2" } },
//     { params: { id: "3" } },
//   ];
// }
