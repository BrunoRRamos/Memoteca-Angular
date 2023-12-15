import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExluirCardComponent } from './exluir-card.component';

describe('ExluirCardComponent', () => {
  let component: ExluirCardComponent;
  let fixture: ComponentFixture<ExluirCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExluirCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExluirCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
