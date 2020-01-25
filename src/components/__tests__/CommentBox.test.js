import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CommentBox from 'components/CommentBox';
let wrapped;

beforeEach(() => {
  //are using fount to render full dom, but should only use shallow
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  //need to unmount Full Dom
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: 'new comment' } });
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has a text area that can be submitted and cleared', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
