import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccoutComponent } from './saving-account.component';

describe('SavingAccoutComponent', () => {
  let component: SavingAccoutComponent;
  let fixture: ComponentFixture<SavingAccoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingAccoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingAccoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
