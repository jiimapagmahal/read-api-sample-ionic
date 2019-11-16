import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {Books} from "../../../models/books";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {
  book: Books;

  constructor(private modalController: ModalController, private navParams: NavParams, private bs: BooksService) { }

  ngOnInit() {
    this.bs.getBook(this.navParams.data.bookId).subscribe((data: Books[]) => {
      this.book = data[0]
    })
  }

  async closeModal(){
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
