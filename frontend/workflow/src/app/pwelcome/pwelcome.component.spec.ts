import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwelcomeComponent } from './pwelcome.component';

describe('PwelcomeComponent', () => {
  let component: PwelcomeComponent;
  let fixture: ComponentFixture<PwelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
