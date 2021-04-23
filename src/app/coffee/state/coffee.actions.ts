import { createAction, props } from '@ngrx/store';
import { ListLayoutEnum, SortDirectionEnum } from '../../core/enums';
import { CoffeeSortByEnum } from '../enums';
import { ICoffee } from '../interfaces';

export const selectSortByOption = createAction(
  '[Coffee List] Change list sort by option',
  props<{ selectedSortByOption: CoffeeSortByEnum }>()
);

export const selectSortDirectionOption = createAction(
  '[Coffee List] Change list sort direction option',
  props<{ selectedSortDirectionOption: SortDirectionEnum }>()
);

export const selectLayoutOption = createAction(
  '[Coffee List] Change list layout option',
  props<{ selectedLayoutOption: ListLayoutEnum }>()
);

export const loadCoffees = createAction(
  '[Coffee List] Load',
);

export const loadCoffeesSuccess = createAction(
  '[Coffee List] Load Success',
  props<{ coffees$: ICoffee[] }>()
);

export const loadCoffeesFailure = createAction(
  '[Coffee List] Load Fail',
  props<{ coffeesLoadError: string }>()
);
