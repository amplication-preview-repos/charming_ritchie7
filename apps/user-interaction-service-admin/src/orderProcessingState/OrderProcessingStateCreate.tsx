import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OrderProcessingStateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Create>
  );
};
