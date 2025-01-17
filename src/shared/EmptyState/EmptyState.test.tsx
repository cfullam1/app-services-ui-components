import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./EmptyState.stories";

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName!,
  Story,
]);

// Batch snapshot testing
test.each(testCases)("Renders %s story", async (_storyName, Story) => {
  const tree = await render(<Story />);
  expect(tree.baseElement).toMatchSnapshot();
});
