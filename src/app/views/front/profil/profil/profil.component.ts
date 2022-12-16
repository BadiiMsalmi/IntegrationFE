import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// import { EditdialogComponent } from '../dialog/editdialog/editdialog.component';
// import { FollowersComponent } from '../dialog/followers/followers.component';
// import { FollowingComponent } from '../dialog/following/following.component';
// import { StatsdialogComponent } from '../dialog/statsdialog/statsdialog.component';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(/*public dialog: MatDialog*/) { }


  ngOnInit(): void {
  }

  //   openeditDialog(): void {
  //     const dialogRef = this.dialog.open(EditdialogComponent, {
  //       width: '570px',
  //       height:'500px',
  //     });
  //   }
  //   openstatsDialog(): void {
  //     const dialogRef = this.dialog.open(StatsdialogComponent, {
  //       width: '500px',
  //     });
  // }
  // openFollowersDialog(): void {
  //   const dialogRef = this.dialog.open(FollowersComponent, {
  //     width: '500px',
  //   });
  // }
  // openFollowingDialog(): void {
  //   const dialogRef = this.dialog.open(FollowingComponent, {
  //     width: '500px',
  //   });
  // }
}
