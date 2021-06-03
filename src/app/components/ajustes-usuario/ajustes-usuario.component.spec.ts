import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustesUsuarioComponent } from './ajustes-usuario.component';

describe('AjustesUsuarioComponent', () => {
  let component: AjustesUsuarioComponent;
  let fixture: ComponentFixture<AjustesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustesUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
