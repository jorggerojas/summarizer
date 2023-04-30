import { render, axe } from "@test-utils";
import { Input } from ".";

describe("Input", () => {
  it("renders with axe support", async () => {
    const { container } = render(<Input id='test' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders with label", () => {
    const { getByLabelText } = render(<Input id='test' label='test' />);
    expect(getByLabelText("label")).toBeInTheDocument();
  });
  it("renders with error status", () => {
    const { getByLabelText } = render(<Input id='test' status='error' />);
    expect(getByLabelText("label")).toHaveStyle("color: var(--error)");
  });
  it("renders with required prop", () => {
    const { getByLabelText } = render(
      <Input id='test' required label='Required' />,
    );
    expect(getByLabelText("label")).toHaveTextContent("Required");
    expect(getByLabelText("input")).toBeRequired();
  });
  it("throws error if required prop is passed without label", () => {
    // suppress "console.error", test should pass even if event log is removed
    jest.spyOn(console, "error").mockImplementation(() => ({}));
    expect(() => {
      render(<Input id='test' required />);
    }).toThrowError(
      "Input with required prop must have a label. Either remove the required prop or add a label.",
    );
  });
});
