let data = [];

export async function POST(request) {
    const body = await request.json();
    data = body;
    return new Response(JSON.stringify(data), {
        headers: { 'content-type': 'application/json' },
    });
}

export async function GET(request) {
    return new Response(JSON.stringify(data), {
        headers: { 'content-type': 'application/json' },
    });
}