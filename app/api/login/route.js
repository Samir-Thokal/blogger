export async function POST(req) {
    const { email, password } = await req.json();

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = "dummy-token";
  
      return new Response(
        JSON.stringify({ message: "Logged in" }),
        {
          status: 200,
          headers: {
            "Set-Cookie": `auth-token=${token}; Max-Age=86400; Path=/; HttpOnly; Secure; SameSite=Strict`,
            "Content-Type": "application/json",
          },
        }
      );
    }
  
    return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
  }