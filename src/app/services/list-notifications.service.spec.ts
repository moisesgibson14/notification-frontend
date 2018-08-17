import { TestBed, inject } from '@angular/core/testing';

import { ListNotificationsService } from './list-notifications.service';

describe('ListNotificationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListNotificationsService]
    });
  });

  it('should be created', inject([ListNotificationsService], (service: ListNotificationsService) => {
    expect(service).toBeTruthy();
  }));
});
