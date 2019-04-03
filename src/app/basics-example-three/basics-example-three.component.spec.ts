import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsExampleThreeComponent } from './basics-example-three.component';

describe('BasicsExampleThreeComponent', () => {
  let component: BasicsExampleThreeComponent;
  let fixture: ComponentFixture<BasicsExampleThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicsExampleThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsExampleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
