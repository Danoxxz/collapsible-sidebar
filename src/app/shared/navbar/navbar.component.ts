import { Component } from '@angular/core';
import { ContentData } from '../../interfaces/content-data.interface';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private sidebarSrv: SidebarService) {}

  // Esta función se utiliza para cambiar el contenido principal en función de los datos proporcionados.
  // Recibe un objeto ContentData que contiene el título y el ícono del nuevo contenido.
  changeMainContent(data: ContentData): void {
    // Se llama al método setContent del SidebarService para actualizar el contenido principal.
    this.sidebarSrv.setContent(data);
  }
}
