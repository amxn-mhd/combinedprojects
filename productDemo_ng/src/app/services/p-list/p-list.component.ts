import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-p-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './p-list.component.html',
  styleUrl: './p-list.component.css'
})
export class PListComponent {
[x: string]: any;
  products : Product[]=[
    {
      P_ID:1,
      Name: "Pen",
      Color:"white",
      Weight:"10g",
      Availability:true
    },
    {
      P_ID:2,
      Name: "Pen",
      Color:"Black",
      Weight:"10g",
      Availability:true
    },
    {
      P_ID:3,
      Name: "Paper",
      Color:"White",
      Weight:"1g",
      Availability:false
    }
  ]

}
