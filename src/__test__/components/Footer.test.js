import React from "react";
import { mount } from "enzyme"
import Footer from "../../components/Footer"
import { create } from "react-test-renderer"

describe("--- Test Footer", () => {
  const footer = mount(<Footer/>)
  
  test("-- Render Component Footer", () => {
    expect(footer.length).toEqual(1)
  });

  test("-- Render Title", () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store')
  })
})

describe('--- Footer Snapshot', () => {
  test.only('-- Test UI Footer', () => {
    const footer = create(<Footer />)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})