import { BlackboxSolvers } from "./blackbox_solvers";

export interface AcvmHelperConfig<TFieldElement> {
  fieldElementFromString: (x: TFieldElement) => string;
  fieldElementToString: (str: string) => TFieldElement;
  blackboxSolvers: BlackboxSolvers<TFieldElement>;
}
