export type HelloCardProps = {
  message: string;
  database: "connected" | "unreachable" | "unknown";
};

export function HelloCard({ message, database }: HelloCardProps) {
  const isConnected = database === "connected";

  return (
    <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        pinch-frontend
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {message}
      </h1>
      <div className="mt-6 flex items-center gap-2">
        <span
          data-testid="database-status-dot"
          className={`h-2.5 w-2.5 rounded-full ${
            isConnected ? "bg-emerald-500" : "bg-red-500"
          }`}
        />
        <span className="text-sm text-zinc-600 dark:text-zinc-300">
          Database: {database}
        </span>
      </div>
    </div>
  );
}
