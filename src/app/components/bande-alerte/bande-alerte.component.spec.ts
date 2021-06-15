import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BandeAlerteComponent } from './bande-alerte.component';

describe('BandeAlerteComponent', () => {
  let component: BandeAlerteComponent;
  let fixture: ComponentFixture<BandeAlerteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BandeAlerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandeAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
