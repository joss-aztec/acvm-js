import { ACIR } from "./acir";
import { BlackboxSolvers } from "./blackbox_solvers";
import { InitialWitness, IntermediateWitness } from "./witnesses";

export async function solveIntermediateWitness(arg: {
  acir: ACIR;
  initialWitness: InitialWitness;
  blackboxSolvers: BlackboxSolvers;
}): Promise<IntermediateWitness> {
  // Current implementation exists in @noir-lang/aztec_backend
  // If acir could be wrapped in wasm then that would help
  throw new Error("Unimplemented");
}
