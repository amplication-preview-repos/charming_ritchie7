import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="contactInformation" source="contactInformation" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
