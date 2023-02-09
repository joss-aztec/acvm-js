# acvm-js

The project serves to wrap each build varient of [ACVM](https://github.com/noir-lang/acvm) as a node module that can be invoked for the purposes of proving and verifying — whether that be in the browser or node.js.

Currently the ACVM rust project selects its field element representation at compile time, hence why multiple builds are necessary. The current outputs are:

- `@noir-lang/acvm-bn254`
- `@noir-lang/acvm-bls12_381`
