import type { APIRoute } from 'astro';

const getRobotsTxt = () => {
    return JSON.stringify({
        "status": "🎧听歌",
        "views": 123456,
        "updatedAt": "2026-01-17T12:03:37.020Z"
    });
};

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt(),
  {
    status: 200,
    headers: {
        'Content-Type': 'application/json'
    }
});
};