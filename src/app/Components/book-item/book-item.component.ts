import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ibook } from '../../Models/book.mode';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  route = inject(Router);
  @Input() item!: Ibook;

  navigateToID() {
    this.route.navigate(['books', this.item.id]);
  }
}