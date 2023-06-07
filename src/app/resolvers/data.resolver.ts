import { ResolveFn } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';

export const DataResolver: ResolveFn<string>= (route, state) => {
    const dataService: DataService = inject(DataService);
    return dataService.delayedStringReturn();
};
