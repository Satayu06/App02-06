import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton , IonBackButton, IonGrid, IonRow, IonCol, IonLabel, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartSharp } from 'ionicons/icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton , IonBackButton, IonGrid , IonRow, IonCol, IonLabel, IonIcon]
})
export class IndexPage implements OnInit {

  constructor() {
    addIcons({ cartSharp });
   }

  ngOnInit() {
  }


}
