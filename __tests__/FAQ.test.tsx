import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "../src/components/FAQ";

describe("FAQ", () => {
  it("renders all question headings", () => {
    render(<FAQ />);
    expect(
      screen.getByText(
        "Does social media actually affect my PR application?"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Which Canadian immigration programs does this help with?"
      )
    ).toBeInTheDocument();
  });

  it("answer is hidden by default", () => {
    render(<FAQ />);
    const answer = screen.getByText(/Yes\. Canadian immigration officers/);
    expect(answer).not.toBeVisible();
  });

  it("clicking a question reveals the answer", () => {
    render(<FAQ />);
    const question = screen.getByText(
      "Does social media actually affect my PR application?"
    );
    fireEvent.click(question);
    const answer = screen.getByText(/Yes\. Canadian immigration officers/);
    expect(answer).toBeVisible();
  });

  it("clicking an open question closes it", () => {
    render(<FAQ />);
    const question = screen.getByText(
      "Does social media actually affect my PR application?"
    );
    fireEvent.click(question);
    fireEvent.click(question);
    const answer = screen.getByText(/Yes\. Canadian immigration officers/);
    expect(answer).not.toBeVisible();
  });
});
