import { NgModule } from "@angular/core";

import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    imports: [
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule
    ],
    exports: [
        MatListModule,
        MatDividerModule,
        MatInputModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class AngularMaterialModule {  }