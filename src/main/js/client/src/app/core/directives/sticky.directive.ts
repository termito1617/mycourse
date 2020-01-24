import { Directive, Input, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[sticky]'
})
export class StickyDirective implements OnDestroy, OnInit, AfterViewInit {
  @Input('sticky')
  sticky: string;

  @Input('offset')
  offset: number;

  @Input('sticky-end')
  endElement: HTMLElement;

  hostOffset: number;
  endOffset: number;

  isStick = false;

  private subscription: Subscription;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.sticky = this.sticky || 'sticky';
    this.offset = +this.offset || 0;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.hostOffset = this.el.nativeElement.offsetTop - this.offset;
      this.endOffset = this.endElement.offsetTop;

      this.handleSticky();
      this.subscription = fromEvent(window, 'scroll')
        .pipe(throttleTime(10))
        .subscribe(this.handleSticky.bind(this));
    }, 300)
  }

  handleSticky() {
    if (this.isStick) {
      if (window.pageYOffset <= this.hostOffset || window.pageYOffset >= this.endOffset) {
        this.isStick = false;
        this.el.nativeElement.classList.remove(this.sticky);
      } 
    } else {
      if (window.pageYOffset > this.hostOffset && window.pageYOffset <= this.endOffset) {
        this.isStick = true;
        this.el.nativeElement.classList.add(this.sticky);
      }
    }
  }

  unstick() {
    this.isStick = false;
    this.el.nativeElement.classList.remove(this.sticky);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
