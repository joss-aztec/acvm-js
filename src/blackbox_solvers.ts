import { BlackBoxFunc } from "./blackbox_func";

export interface BlackboxSolvers<TFieldElement> {
  //   [BlackBoxFunc.AES]?: () => never;
  [BlackBoxFunc.AND]?: (
    x1: TFieldElement,
    x2: TFieldElement
  ) => Promise<TFieldElement>;

  [BlackBoxFunc.XOR]?: (
    x1: TFieldElement,
    x2: TFieldElement
  ) => Promise<TFieldElement>;

  //   [BlackBoxFunc.RANGE]?: () => void;

  [BlackBoxFunc.SHA256]?: (xs: TFieldElement[]) => Promise<TFieldElement[]>;

  [BlackBoxFunc.Blake2s]?: (xs: TFieldElement[]) => Promise<TFieldElement[]>;

  [BlackBoxFunc.MerkleMembership]?: (
    xs: TFieldElement[]
  ) => Promise<TFieldElement>;

  [BlackBoxFunc.SchnorrVerify]?: (
    xs: TFieldElement[]
  ) => Promise<TFieldElement>;

  [BlackBoxFunc.Pedersen]?: (
    xs: TFieldElement[]
  ) => Promise<[TFieldElement, TFieldElement]>;

  [BlackBoxFunc.HashToField128Security]?: (
    xs: TFieldElement[]
  ) => Promise<TFieldElement>;

  [BlackBoxFunc.EcdsaSecp256k1]?: (
    xs: TFieldElement[]
  ) => Promise<TFieldElement>;

  [BlackBoxFunc.FixedBaseScalarMul]?: (
    xs: TFieldElement
  ) => Promise<[TFieldElement, TFieldElement]>;
}
