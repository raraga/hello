export const onRequestPost: PagesFunction = async (context) => {
  const data = await context.request.formData();
  const name = data.get("name")?.toString();
  const email = data.get("email")?.toString();
  const message = data.get("message")?.toString();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400 }
    );
  }

  try {
    await context.env.araga_db
      .prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)")
      .bind(name, email, message)
      .run();

    return new Response(
      JSON.stringify({ success: true, message: "Inquiry saved" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to save inquiry" }),
      { status: 500 }
    );
  }
};