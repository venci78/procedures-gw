import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProceduresGwSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProceduresGwSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProceduresGwSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProceduresGwSharedModule {
  static forRoot() {
    return {
      ngModule: ProceduresGwSharedModule
    };
  }
}
