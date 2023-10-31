import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {

  constructor(private service:CardsService) {

  }

  accountData: AccountDataModel = {
    name: "Lucas Gonçalves",
    account: {
      agency: "0002",
      number: "00.000000-0"
    },
    card: {
      limit: 1000,
      number: "0001"
    }
  };

  ngOnInit(): void {
    this.getAccountData();
  }
  //Pegando name da api
  getAccountData() {
    this.service.getCard().subscribe( data => {
      this.accountData.name = data.name;
      this.accountData.account.agency = data.account.agency;
      this.accountData.card.limit = data.card.limit;
      this.accountData.account.number = data.account.number;
      this.accountData.card.number = data.card.number.split("   ")[3]
    })
  }
}
