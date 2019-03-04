import { TestBed } from '@angular/core/testing';

import { PostureService } from './posture.service';

describe('PostureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostureService = TestBed.get(PostureService);
    expect(service).toBeTruthy();
  });
});
