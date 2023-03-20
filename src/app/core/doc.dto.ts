import {SpecDocDto} from "./spec.doc.dto";

export class DocDto{
  id: string | null = null;
  name: string| null = null;
  spec:SpecDocDto | null = null;
}
