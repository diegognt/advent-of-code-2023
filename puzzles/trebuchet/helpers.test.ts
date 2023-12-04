import { assertEquals } from "$std/assert/mod.ts";
import getFirstAndLastDigitsFromLine from "./helpers.ts";

Deno.test("Tests for `getDigitsFromString`", () => {
  assertEquals(getFirstAndLastDigitsFromLine("1abclw2"), "12");
  assertEquals(getFirstAndLastDigitsFromLine("pqr3stu8vwx"), "38");
  assertEquals(getFirstAndLastDigitsFromLine("a1b2c3d4e5f"), "15");
  assertEquals(getFirstAndLastDigitsFromLine("treb7uchet"), "77");
});
