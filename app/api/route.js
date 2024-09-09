export function GET(request) {
  console.log('request =====> ', request.method);

  // return Response.json();
  return new Response('Hello!');
}

// export function POST(request) {}