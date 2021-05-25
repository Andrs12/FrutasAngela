import { Component, ViewChild, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('modalLogin') modalLogin: any;

  constructor(private service: UsuarioService, private modal: NgbModal) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout();
  }

  login(){
    this.modal.open(this.modalLogin)
  }

  register(){

  }    

}
