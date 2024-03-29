import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() module: CoreModule) {
    if (module) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
