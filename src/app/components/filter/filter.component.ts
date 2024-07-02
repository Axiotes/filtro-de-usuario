import { Component } from '@angular/core';
import { FilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  statusOptions = [
    {viewValue: "Ativo", value: true},
    {viewValue: "Inativo", value: false}
  ] 

  filterOptions: FilterOptions = {
    name: '',
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  }

  filter() {
    console.log(this.filterOptions);
  }
}
