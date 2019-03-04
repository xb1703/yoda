import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostureViewComponent } from './posture-view.component';

describe('PostureViewComponent', () => {
  let component: PostureViewComponent;
  let fixture: ComponentFixture<PostureViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostureViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
