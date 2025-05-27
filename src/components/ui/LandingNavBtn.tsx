import { Button } from "@ui";
import type { JSX } from "react";

export default function LandingNavBtn(): JSX.Element {
  return (
    <ul className="flex gap-5 tracking-wider items-center">
      <Button type="signIn" className="">
        sign in
      </Button>
      <Button type="signUp" className="">
        sign up
      </Button>
    </ul>
  );
}
