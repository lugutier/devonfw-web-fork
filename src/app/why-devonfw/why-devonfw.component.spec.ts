import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDevonfwComponent } from './why-devonfw.component';

describe('WhyDevonfwComponent', () => {
  let component: WhyDevonfwComponent;
  let fixture: ComponentFixture<WhyDevonfwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyDevonfwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyDevonfwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
