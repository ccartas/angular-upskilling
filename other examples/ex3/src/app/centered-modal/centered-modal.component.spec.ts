import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredModalComponent } from './centered-modal.component';

describe('CenteredModalComponent', () => {
  let component: CenteredModalComponent;
  let fixture: ComponentFixture<CenteredModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenteredModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
