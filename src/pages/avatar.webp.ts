import type { APIRoute } from "astro";
import sharp from "sharp";

const AVATAR_URL = "https://q1.qlogo.cn/g?b=qq&nk=501414437&s=100";
const FETCH_TIMEOUT = 10_000;

export const GET: APIRoute = async () => {
	const response = await fetch(AVATAR_URL, {
		signal: AbortSignal.timeout(FETCH_TIMEOUT),
	});

	if (!response.ok) {
		throw new Error(`获取 QQ 头像失败：${response.status} ${response.statusText}`);
	}

	const webpBuffer = await sharp(Buffer.from(await response.arrayBuffer()))
		.resize(100, 100, { fit: "cover" })
		.webp({ quality: 50, effort: 6 })
		.toBuffer();

	return new Response(new Uint8Array(webpBuffer), {
		headers: {
			"Content-Type": "image/webp",
			"Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
		},
	});
};
