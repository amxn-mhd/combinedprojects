import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../model/employee';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
  employees: Employee[] = [
    {
      id:1,
      name: "Aman",

  gender: "male",

  email: "amxn@gmail.com",

  phoneNumber: 8606544977,

  contactPreference: "mobile",

  dateOfBirth: new Date("2002-10-14"),

  department: "CSE",

  isActive: true,

  photoPath: "aman.jpg",
    },{
      id:2,
      name: "Ayaan",

  gender: "male",

  email: "ayaan@gmail.com",

  phoneNumber: 7025265030,

  contactPreference: "email",

  dateOfBirth: new Date("2006-05-21"),

  department: "ECE",

  isActive: false,

  photoPath: "img2.jpg",
    }
    ,{
      id:2,
      name: "Ayaan",

  gender: "male",

  email: "ayaan@gmail.com",

  phoneNumber: 7025265030,

  contactPreference: "email",

  dateOfBirth: new Date("2006-05-21"),

  department: "ECE",

  isActive: false,

  photoPath: "img2.jpg",
    },{
      id:2,
      name: "Ayaan",

  gender: "male",

  email: "ayaan@gmail.com",

  phoneNumber: 7025265030,

  contactPreference: "email",

  dateOfBirth: new Date("2006-05-21"),

  department: "ECE",

  isActive: false,

  photoPath: "img2.jpg",
    },{
      id:2,
      name: "Ayaan",

  gender: "male",

  email: "ayaan@gmail.com",

  phoneNumber: 7025265030,

  contactPreference: "email",

  dateOfBirth: new Date("2006-05-21"),

  department: "ECE",

  isActive: false,

  photoPath: "img2.jpg",
    }
  ]
name: any;

}
