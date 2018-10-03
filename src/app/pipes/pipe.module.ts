import {NgModule} from "@angular/core";
import {GenderFilterPipe} from "./filter"
@NgModule({
  imports:[],
  declarations:[GenderFilterPipe],
  exports:[GenderFilterPipe]
})
export class PipeModule{}
