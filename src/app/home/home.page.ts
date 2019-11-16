import {Component, OnInit} from '@angular/core';
import {BooksService} from "../services/books.service";
import {Books} from "../models/books";
import {BookPage} from "../modals/books/book/book.page";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  books: Books[];
  tempbook: Books;

  constructor(public modalController: ModalController, private bs: BooksService) {}

  ngOnInit(): void {
    this.bs.getBooks().subscribe((data: Books[]) => {
      this.books = data;
    });
    this.tempbook = null;
  }

  clickButton(bookId: any){
    this.getBookInfo(bookId)
  }

  async getBookInfo(bookId){
    const modal = await this.modalController.create({
      component: BookPage,
      componentProps: {
        'bookId': bookId
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log('Modal closed!')
      }
    });

    return await modal.present();
  }

}
