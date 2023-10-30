import { Component } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent {
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


}
