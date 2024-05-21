import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingMethodComponent } from './processing-method.component';

describe('ProcessingMethodComponent', () => {
  let component: ProcessingMethodComponent;
  let fixture: ComponentFixture<ProcessingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessingMethodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcessingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
