import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.post("/api/contact", async (c) => {
  const data = await c.req.formData();
  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const message = data.get("message")?.toString();

  if (!name || !email || !message) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  try {
    await c.env.araga_db
      .prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)")
      .bind(name, email, message)
      .run();

    return c.json({ success: true, message: "Inquiry saved" }, 200);
  } catch (err) {
    return c.json({ error: "Failed to save inquiry" }, 500);
  }
});

app.get("/api/contact", async (c) => {
  try {
    const result = await c.env.araga_db.prepare("SELECT * FROM contacts ORDER BY id DESC").all();
    return c.json({ contacts: result.results }, 200);
  } catch (err) {
    return c.json({ error: "Failed to fetch contacts" }, 500);
  }
});

export default {
  fetch: app.fetch,
};