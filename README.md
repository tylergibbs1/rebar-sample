# rebar-sample

A tiny, public sample project. [Rebar](https://rebarcore.com) clones this repo
in its first-run "test repair" demo to show its detect → fix → verify loop on
real code, in a throwaway sandbox, before you connect any of your own systems.

Nothing here is special — it's a small TypeScript cart utility. The demo plants a
safe, self-contained type error in a throwaway copy (never this repo), lets Rebar
diagnose and fix it, and verifies the fix with the real TypeScript compiler.

```ts
import { cartTotal } from "./src/cart"

cartTotal([2.5, 4, 1.25]) // 7.75
```
