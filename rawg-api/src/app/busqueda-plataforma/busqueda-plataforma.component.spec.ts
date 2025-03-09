import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPlataformaComponent } from './busqueda-plataforma.component';

describe('BusquedaPlataformaComponent', () => {
  let component: BusquedaPlataformaComponent;
  let fixture: ComponentFixture<BusquedaPlataformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusquedaPlataformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaPlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
