import {SpecDocDto} from "./spec.doc.dto";
import {BaseListFilterDto} from "./dto/BaseListFilterDto";

export class DocDto extends BaseListFilterDto{

  spec:SpecDocDto | null = null;
}
