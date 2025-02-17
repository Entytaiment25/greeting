import { Elysia, t } from "elysia";
import { html, Html } from "@elysiajs/html";
import { Greeting } from "./Greeting";

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
    }
  )
  .listen(3000);
