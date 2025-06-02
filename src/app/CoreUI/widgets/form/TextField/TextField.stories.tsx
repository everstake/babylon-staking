import type { Meta, StoryObj } from "@storybook/react";
import * as yup from "yup";

import { Form } from "@/widgets/form/Form";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextField>;

const schema = yup
  .object()
  .shape({
    text_field: yup.string().required(),
  })
  .required();

export const Default: Story = {
  args: {
    label: "Text Field",
    name: "text_field",
    placeholder: "Default input",
    hint: "Some random and useless hint",
    defaultValue: "",
    autoFocus: true,
  },
  decorators: [
    (Story) => (
      <Form schema={schema} onChange={console.log}>
        <Story />
      </Form>
    ),
  ],
};
