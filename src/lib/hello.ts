export type HelloResponse = {
  message: string;
  database: "connected" | "unreachable";
};

const BACKEND_INTERNAL_URL =
  process.env.BACKEND_INTERNAL_URL ?? "http://backend:8000";

export async function fetchHello(): Promise<HelloResponse> {
  const response = await fetch(`${BACKEND_INTERNAL_URL}/api/hello`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Backend responded with ${response.status}`);
  }

  return response.json() as Promise<HelloResponse>;
}
