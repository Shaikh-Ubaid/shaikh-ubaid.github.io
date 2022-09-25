---
title: 'Supporting Subroutines and Improving/Refactoring WASM Backend'
publishedAt: '2022-07-22'
excerpt: 'GSoC 22: Blog 8'
avatar: /imgs/gsoc_logo.svg
---
# Hey there 🤗, Welcome to my GSoC Journey

This is a series of blogs that I am writing to share my amazing **GSoC 22** (Google Summer of Code 2022) Journey with you all.

---

# Supporting Subroutines and Improving/Refactoring WASM Backend

This week, I worked on
- Refactoring/Improving the `WebAssembly Backend`
- Adding support for Subroutines (Still working on this)

The Improvements brought are the following:
- The maps `m_var_name_idx_map` and `m_func_name_idx_map` now use/support keys hashed using `get_hash()`.
This hopefully/possibly reduces the possibilities of collision in these maps.
- New functions `emit_function_prototype()` and ` emit_function_body()` have been added/defined
 which make it possible to independently define the function prototype and the function bodies.
This hopefully/possibly encourages code reuse.
- The concept of `SymbolInfo` (used by the `C` and `CPP` Backends) is also introduced.

Under progress:
- [#21](https://github.com/lfortran/lfortran/pull/21) brings the support for `Subroutines`.
- Once it is complete, the WebAssembly Backend would then be able to support `Subroutines`.
- This would hopefully allow a larger subset of code to be parsed by the `LFortran` `WebAssembly` Backend.

I will update here as soon as I make progress on the same `PR` [#21](https://github.com/lfortran/lfortran/pull/21)


This phase was mostly/approximately from `16-07-2022` to `22-07-2022`.

The MRs during this phase are as follows:
- [WASM: Improvements and Refactoring #13](https://github.com/lfortran/lfortran/pull/13)
- [WASM: Add support for Subroutines #21](https://github.com/lfortran/lfortran/pull/21)

---

That's all for this blog. Thank you for your time. We continue this series in the next blog.
