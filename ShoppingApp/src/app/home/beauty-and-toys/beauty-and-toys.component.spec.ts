import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyAndToysComponent } from './beauty-and-toys.component';

describe('BeautyAndToysComponent', () => {
  let component: BeautyAndToysComponent;
  let fixture: ComponentFixture<BeautyAndToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautyAndToysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautyAndToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
