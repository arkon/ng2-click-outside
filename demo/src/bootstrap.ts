import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ClickOutsideModule } from 'ng2-click-outside';

import { DemoComponent } from './demo/demo.component';

enableProdMode();

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, ClickOutsideModule],
  bootstrap: [DemoComponent],
})
class DemoAppModule {}

platformBrowserDynamic().bootstrapModule(DemoAppModule);
