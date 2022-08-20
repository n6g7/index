import type * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    "--label"?: string;
  }
}
