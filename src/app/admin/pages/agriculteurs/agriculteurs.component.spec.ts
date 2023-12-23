import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agriculteursComponent } from './agriculteurs.component';

describe('agriculteursComponent', () => {
  let component: agriculteursComponent;
  let fixture: ComponentFixture<agriculteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agriculteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(agriculteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
