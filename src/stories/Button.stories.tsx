import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
