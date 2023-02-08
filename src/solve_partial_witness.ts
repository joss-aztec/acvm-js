import { ACIR } from "./acir";
import { BlackboxSolvers } from "./blackbox_solvers";
import { SparseWitness } from "./sparse_witness";

export async function solvePartialWitness<TFieldElement>(arg: {
  acir: ACIR;
  initialWitness: SparseWitness<TFieldElement>;
  blackboxSolvers: BlackboxSolvers<TFieldElement>;
}): Promise<SparseWitness<TFieldElement>> {
  // Current implementation exists in @noir-lang/aztec_backend
  // If acir could be wrapped in wasm then that would help
  throw new Error("Unimplemented");
}
