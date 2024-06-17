import { sum } from "../components/sum";

test("Sum function should calculate the sum of two numbers", () => {
  //assertion
  expect(sum(4, 4)).toBe(7);
});
