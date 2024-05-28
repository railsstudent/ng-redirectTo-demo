import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokermonComponent } from './pokermon.component';

describe('PokermonComponent', () => {
  let component: PokermonComponent;
  let fixture: ComponentFixture<PokermonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokermonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
