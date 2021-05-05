import { Component, OnInit, ViewChild } from '@angular/core';

import { interval } from 'rxjs';
@Component({
  selector: 'app-carousel',
  templateUrl: `carousel.component.html`,
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  img = 'assets/images/lab.png';
  images = [
    {
      url: 'assets/images/feedback.png',
      text:
        "Do you know a / 'Slash' command helps you contextualize your Search and improve the search results? SHOW ME HOW",
    },
    {
      url: 'assets/images/lab.png',
      text:
        "Do you know a / 'Slash' command helps you contextualize your Search and improve the search results? SHOW ME HOW",
    },
    {
      url: 'assets/images/patientid_canine.png',
      text:
        "Do you know a / 'Slash' command helps you contextualize your Search and improve the search results? SHOW ME HOW",
    },
    {
      url: 'assets/images/patientid_feline.png',
      text:
        "Do you know a / 'Slash' command helps you contextualize your Search and improve the search results? SHOW ME HOW",
    },
  ];
  color = 'green';
  constructor() {}
  selectedindex = 0;
  text =
    "Do you know a /'Slash' command helps you contextualize your Search and improve the search results? SHOW ME HOW";
  ngOnInit() {
    const obs = interval(1000);
    obs.subscribe((ind) => {
      if (ind >= 4) {
        ind = ind % 4;
      }
      this.selectedindex = ind;
      this.text = this.images[ind].text;
      this.img = this.images[ind].url;
      console.log(this.selectedindex, this.text);
    });
  }

  // selectImage(index: number) {
  //   console.log("Index: " + index);
  //   this.selectedindex = index;
  //   console.log("Selected Index: " + this.selectedindex);
  //   this.selectedindex;
  // }

  //setTimeout(this.carousel, 2000); // Change image every 2 seconds
}
