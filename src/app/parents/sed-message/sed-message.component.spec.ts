import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedMessageComponent } from './sed-message.component';

describe('SedMessageComponent', () => {
  let component: SedMessageComponent;
  let fixture: ComponentFixture<SedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
