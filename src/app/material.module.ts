import { NgModule } from '@angular/core';

import {
    MatSliderModule,
    MatToolbarModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatSliderModule,
        MatToolbarModule,
        MatInputModule
    ],
    exports: [
        MatSliderModule,
        MatToolbarModule,
        MatInputModule
    ]
})
export class MaterialModule { }
