import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../services/jQuery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('appModalTrigger') modalId: string;
  constructor(@Inject(JQ_TOKEN) private $: any,
    ref: ElementRef) {
      this.el = ref.nativeElement;
    }

  ngOnInit() {
      this.el.addEventListener('click', (e) => {
        this.$(`#${this.modalId}`).modal({});
      });
  }
}
