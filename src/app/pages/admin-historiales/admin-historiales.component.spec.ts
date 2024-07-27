import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistorialesComponent } from './admin-historiales.component';

describe('AdminHistorialesComponent', () => {
  let component: AdminHistorialesComponent;
  let fixture: ComponentFixture<AdminHistorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHistorialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminHistorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
