import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostureListComponent } from './posture-list.component';

describe('PostureListComponent', () => {
  let component: PostureListComponent;
  let fixture: ComponentFixture<PostureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
