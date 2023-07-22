import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNCCComponent } from './products-ncc.component';

describe('ProductsNCCComponent', () => {
  let component: ProductsNCCComponent;
  let fixture: ComponentFixture<ProductsNCCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsNCCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsNCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
