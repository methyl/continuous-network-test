export async function onRequest(context) {
  const url = new URL(context.request.url)
  const response = new Response("hello")
  response.headers.set('Access-Control-Allow-Origin', url.origin);
  return response
}
