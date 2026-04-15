import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingCTA from "../src/components/BookingCTA";

describe("BookingCTA", () => {
  it("renders the form fields", () => {
    render(<BookingCTA />);
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /book free call/i })
    ).toBeInTheDocument();
  });

  it("shows success message after valid submission", async () => {
    const user = userEvent.setup();
    render(<BookingCTA />);
    await user.type(screen.getByPlaceholderText("Your name"), "Rajesh Kumar");
    await user.type(
      screen.getByPlaceholderText("Email address"),
      "rajesh@example.com"
    );
    await user.click(screen.getByRole("button", { name: /book free call/i }));
    expect(await screen.findByText(/we'll be in touch/i)).toBeInTheDocument();
  });

  it("does not submit when fields are empty", async () => {
    const user = userEvent.setup();
    render(<BookingCTA />);
    await user.click(screen.getByRole("button", { name: /book free call/i }));
    expect(screen.queryByText(/we'll be in touch/i)).not.toBeInTheDocument();
  });
});
