import {NgModule} from "@angular/core";
import {GenderFilterPipe} from "./filter.pipe";
@NgModule({
  imports:[GenderFilterPipe],
  exports:[GenderFilterPipe]
})
export class PipeModule{}
