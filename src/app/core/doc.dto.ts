import {SpecDocDto} from "./spec.doc.dto";
import {BaseDictionary} from "./dto/BaseDictionary";

export class DocDto extends BaseDictionary{

  spec:SpecDocDto | null = null;
}
