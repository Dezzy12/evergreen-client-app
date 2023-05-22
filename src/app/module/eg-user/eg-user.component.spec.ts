import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgUserComponent } from './eg-user.component';

describe('EgUserComponent', () => {
  let component: EgUserComponent;
  let fixture: ComponentFixture<EgUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
