import { renderHook, act } from "@testing-library/react";
import { uppercaseTesting } from "./UppercaseTesting";

describe("when rendered", () => {
  it("returns current initial value, uppercased", () => {
    const { result } = renderHook(() => uppercaseTesting("Test string"));

    expect(result.current.value).toEqual("TEST STRING");
  });
});

describe("when called the updated method", () => {
  it("changes the value and uppercase it", () => {
    const { result } = renderHook(() => uppercaseTesting("Test string"));

    act(() => result.current.update("Updated"));
    expect(result.current.value).toEqual("UPDATED");
  });
});

describe("when re-render with another initial value", () => {
  it("updates the value", () => {
    const { result, rerender } = renderHook(({ text }) => uppercaseTesting(text), {
      initialProps: { text: "Test string" },
    });

    rerender({ text: "Update!" });
    expect(result.current.value).toEqual("UPDATE!");

    act(() => result.current.update("Updated"));
    expect(result.current.value).toEqual("UPDATED");
  });
});
