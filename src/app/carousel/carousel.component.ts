import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent<T> implements OnInit {

  @ContentChild(TemplateRef)
  templateRef: TemplateRef<any>;

  @Input()
  items: T[];
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  ngOnInit(): void {
  }
}
