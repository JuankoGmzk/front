import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterialsComponent } from './create-materials.component';

describe('CreateMaterialsComponent', () => {
  let component: CreateMaterialsComponent;
  let fixture: ComponentFixture<CreateMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
