export async function GET(request) {
    
    const response = await fetch(
        'https://newsdata.io/api/1/news?apikey=' + process.env.NEWSDATA_API_KEY + '=inter%20mediolan'
    );

    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: {
            'content-type': 'application/json',
        },
    });
}
