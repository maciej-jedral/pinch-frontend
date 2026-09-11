import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HelloCard } from "./HelloCard";

describe("HelloCard", () => {
  it("renders the message and a connected database status", () => {
    render(<HelloCard message="Hello from Symfony" database="connected" />);

    expect(screen.getByText("Hello from Symfony")).toBeInTheDocument();
    expect(screen.getByText("Database: connected")).toBeInTheDocument();
    expect(screen.getByTestId("database-status-dot")).toHaveClass(
      "bg-emerald-500",
    );
  });

  it("renders an unreachable database status", () => {
    render(<HelloCard message="Hello from Symfony" database="unreachable" />);

    expect(screen.getByTestId("database-status-dot")).toHaveClass("bg-red-500");
  });
});
