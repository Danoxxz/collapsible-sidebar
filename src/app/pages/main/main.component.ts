import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ContentData } from '../../interfaces/content-data.interface';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  // La ruta base para los iconos utilizados en este componente
  iconUrl = '../../assets/icons/';

  // Los datos del contenido principal a mostrar en este componente
  contentData: ContentData = { title: '', icon: '' };

  constructor(private sidebarSrv: SidebarService) {}

  ngOnInit(): void {
    // Se suscribe al observable content$ del SidebarService para recibir actualizaciones sobre el contenido principal
    this.sidebarSrv.content$.subscribe((data) => {
      // Actualiza los datos del contenido principal con los datos recibidos del SidebarService
      this.contentData = data;
    });
  }
}
