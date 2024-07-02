import { Component, Output, EventEmitter } from '@angular/core';
import { FilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() onFilterEmit = new EventEmitter<FilterOptions>();

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

  public filter() {
    this.onFilterEmit.emit(this.filterOptions);
  }
}
