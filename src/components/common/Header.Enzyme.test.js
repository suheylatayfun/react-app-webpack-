import React, { Component } from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

//how with SHALLOW render you search for the React component tage
it("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

//how with mount you search for the final rendered HTML sine it generates the final DOM.
//we also need to pull in React Router's memoryRouter fro testing since the Header expects to have React Router's props passed in.
it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toEqual(3);
});

// SHALLOW: fast, lightweight. Test one Component
// MOUNT: more realistic, render component and its children
