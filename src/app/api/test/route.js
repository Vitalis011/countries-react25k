export async function GET(request) {
  return new Response(`${Object.keys(request)}`, { status: 200 });
}
