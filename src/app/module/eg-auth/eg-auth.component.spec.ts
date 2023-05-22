import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgAuthComponent } from './eg-auth.component';

describe('EgAuthComponent', () => {
  let component: EgAuthComponent;
  let fixture: ComponentFixture<EgAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
