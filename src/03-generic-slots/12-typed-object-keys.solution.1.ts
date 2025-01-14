import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const typedObjectKeys = <TObject extends {}>(obj: TObject) => {
  return Object.keys(obj) as Array<keyof TObject>;
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
