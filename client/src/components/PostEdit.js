import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostEdit = (props) => {
  return (
      <Edit>
          <SimpleForm>
              <TextInput />
              <TextInput />
              <TextInput />
              <DateInput />
          </SimpleForm>
      </Edit>
  )
};

export default PostEdit;
