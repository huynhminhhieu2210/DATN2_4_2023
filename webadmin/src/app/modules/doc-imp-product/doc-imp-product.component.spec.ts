import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocImpProductComponent } from './doc-imp-product.component';

describe('DocImpProductComponent', () => {
  let component: DocImpProductComponent;
  let fixture: ComponentFixture<DocImpProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocImpProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocImpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
