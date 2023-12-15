import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCardComponent } from './editar-card.component';

describe('EditarCardComponent', () => {
  let component: EditarCardComponent;
  let fixture: ComponentFixture<EditarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
