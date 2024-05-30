import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorinfoPage } from './doctorinfo.page';

describe('DoctorinfoPage', () => {
  let component: DoctorinfoPage;
  let fixture: ComponentFixture<DoctorinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
