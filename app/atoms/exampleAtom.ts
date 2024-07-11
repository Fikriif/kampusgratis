import { atom } from "recoil";

export const exampleState = atom<string>({
  key: "exampleState",
  default: "Hello, Fikri!",
});
