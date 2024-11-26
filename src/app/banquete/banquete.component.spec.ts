import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueteComponent } from './banquete.component';

describe('BanqueteComponent', () => {
  let component: BanqueteComponent;
  let fixture: ComponentFixture<BanqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanqueteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
