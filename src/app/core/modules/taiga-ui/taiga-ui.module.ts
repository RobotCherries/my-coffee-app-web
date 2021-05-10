import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiFilterPipeModule } from '@taiga-ui/cdk/pipes';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiErrorModule,
  TuiGroupModule,
  TuiHintModule,
  TuiPluralizePipeModule,
  TuiRootModule,
  TuiSvgModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiDataListWrapperModule,
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputSliderModule,
  TuiSelectModule,
  TuiSliderModule,
  TuiTextAreaModule,
  TuiToggleModule
} from '@taiga-ui/kit';

@NgModule({

  imports: [
    CommonModule,
    TuiRootModule,

    // Components
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiButtonModule,
    TuiGroupModule,

    // Form
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiErrorModule,
    TuiFieldErrorModule,
    TuiHintModule,
    TuiInputModule,
    TuiInputSliderModule,
    TuiPluralizePipeModule,
    TuiSelectModule,
    TuiSliderModule,
    TuiTextAreaModule,
    TuiTextfieldControllerModule,
    TuiToggleModule,

    // Tools
    TuiFilterPipeModule,

    // Icons
    TuiSvgModule
  ],
  exports: [
    TuiRootModule,

    // Components
    TuiAvatarModule,
    TuiBadgedContentModule,
    TuiButtonModule,
    TuiGroupModule,

    // Form
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiErrorModule,
    TuiFieldErrorModule,
    TuiHintModule,
    TuiInputModule,
    TuiInputSliderModule,
    TuiPluralizePipeModule,
    TuiSelectModule,
    TuiSliderModule,
    TuiTextAreaModule,
    TuiTextfieldControllerModule,
    TuiToggleModule,

    // Tools
    TuiFilterPipeModule,

    // Icons
    TuiSvgModule
  ]
})
export class TaigaUiModule { }
