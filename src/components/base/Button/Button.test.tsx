import { render, axe } from "@test-utils";
import { Button } from ".";

describe("Button", () => {
  it("renders with axe support", async () => {
    const { container } = render(<Button>Test</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("renders with secondary variant and two size variants", () => {
    const { container } = render(
      <>
        <Button variant='secondary'>Test</Button>
        <Button variant='secondary' size='small'>
          Test small
        </Button>
      </>,
    );
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveClass("secondary");
    expect(buttons[0]).toHaveClass("medium");
    expect(buttons[1]).toHaveClass("secondary");
  });
});
