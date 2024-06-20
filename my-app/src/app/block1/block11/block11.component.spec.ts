import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block11Component } from './block11.component';

describe('Block11Component', () => {
  let component: Block11Component;
  let fixture: ComponentFixture<Block11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Block11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Block11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
