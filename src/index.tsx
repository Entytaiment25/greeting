import { Elysia, t } from "elysia";
import { html, Html } from "@elysiajs/html";
import { Greeting } from "./Greeting";
import { readFileSync } from "node:fs";
import { inject } from "@vercel/analytics";

const cssContent = Bun.file("./../dist/output.css");

inject();

new Elysia()
	.use(html())
	.get(
		"/:name?",
		({ params }) => {
			const name = params.name ?? "";
			return <Greeting name={name} />;
		},
		{
			params: t.Object({
				name: t.Optional(t.String()),
			}),
		},
	)
	.get("/output.css", () => {
		return new Response(cssContent, {
			headers: {
				"Content-Type": "text/css",
			},
		});
	})
	.listen(Bun.env.PORT ?? 3000);
