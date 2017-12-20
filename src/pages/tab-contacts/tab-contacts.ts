import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ContactsProvider } from '../../providers/contacts/contacts';

@IonicPage()
@Component({
  selector: 'page-tab-contacts',
  templateUrl: 'tab-contacts.html',
})
export class TabContactsPage {
  contactList: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public contactsProvider: ContactsProvider,
  ) {
  }

  ionViewDidLoad() {
    this.contactList = this.contactsProvider.getContacts();
  }

}
