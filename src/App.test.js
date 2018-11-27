import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestUtils from 'react-dom/test-utils';
import { shallow, mount } from "enzyme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App Render Test", () => {

  it("App Module .. ", () => {
    expect([1, 2, 3, 4, 5, 6, 7]).toHaveLength(7)
  })
})

