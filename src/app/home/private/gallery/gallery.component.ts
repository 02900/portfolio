import { Component, Input, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  @Input() images: string[] = [];
  currentIndex: number = 0;
  @ViewChildren('thumbnail') thumbnails!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
    if (!this.images || this.images.length === 0) {
      throw new Error("Attribute 'images' is required");
    }
  }

  ngAfterViewInit() {
    this.thumbnails.changes.subscribe(t => {
      this.scrollToThumbnail();
    });
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.scrollToThumbnail();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToThumbnail();
    }
  }

  select(index: number) {
    if (index >= 0 && index < this.images.length) {
      this.currentIndex = index;
      this.scrollToThumbnail();
    }
  }

  scrollToThumbnail() {
    this.thumbnails.toArray()[this.currentIndex].nativeElement.scrollIntoView({ behavior: "smooth", block: 'nearest', inline: 'center' });
  }
  
}
