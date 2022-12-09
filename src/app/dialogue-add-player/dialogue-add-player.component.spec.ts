import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueAddPlayerComponent } from './dialogue-add-player.component';

describe('DialogueAddPlayerComponent', () => {
  let component: DialogueAddPlayerComponent;
  let fixture: ComponentFixture<DialogueAddPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueAddPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueAddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
