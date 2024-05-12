import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
    .get("/hello", (c) => {
        return c.json({
            message: "Hello Next.js!",
        });
    })
    .get("/hello/:test", (c) => {
        return c.json({
            message: "Hello world this is test",
        });
    });

export const GET = handle(app);
export const POST = handle(app);
