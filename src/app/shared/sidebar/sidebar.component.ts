import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { ContentData } from '../../interfaces/content-data.interface';

// Definición de la estructura de un elemento de menú
interface MenuItem {
  title: string; // Título del ítem del menú
  icon: string; // Nombre del ícono
  iconHovered: string; // Nombre del ícono al pasar el mouse
  isHovered: boolean; // Estado de si el ítem está siendo hovereado
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  // Estado para controlar si la barra lateral está colapsada o expandida
  sidebarCollapsed = false;

  // Datos del usuario actual
  userData = { username: 'USERNAME', avatar: '' };

  // URL base para los íconos
  iconUrl = '../../../assets/icons/';

  // Íconos utilizados en la barra lateral
  sidebarIcons = { menu: 'arrow.svg', user: 'account_circle_fill.svg' };

  // Datos de los elementos del menú
  menuItems: MenuItem[] = [
    {
      title: 'Notificaciones',
      icon: 'notifications.svg',
      iconHovered: 'notifications_fill.svg',
      isHovered: false,
    },
    {
      title: 'Mensajes',
      icon: 'mail.svg',
      iconHovered: 'mail_fill.svg',
      isHovered: false,
    },
    {
      title: 'Tareas',
      icon: 'task.svg',
      iconHovered: 'task_fill.svg',
      isHovered: false,
    },
  ];

  // Datos de los controles de la barra lateral
  controlItems: MenuItem[] = [
    {
      title: 'Perfil',
      icon: 'person.svg',
      iconHovered: 'person_fill.svg',
      isHovered: false,
    },
    {
      title: 'Configuración',
      icon: 'settings.svg',
      iconHovered: 'settings_fill.svg',
      isHovered: false,
    },
    {
      title: 'Cerrar sesión',
      icon: 'logout.svg',
      iconHovered: 'logout_fill.svg',
      isHovered: false,
    },
  ];

  constructor(private sidebarService: SidebarService) {}

  // Método para cambiar el estado de hover de un ítem de menú o control
  changeIcon(menu: string, index: number, hovered: boolean): void {
    // Determina el array objetivo basado en el tipo de menú ('control' o 'menu')
    const targetArray = menu === 'control' ? this.controlItems : this.menuItems;
    // Actualiza el estado de hover del ítem específico en el array objetivo
    targetArray[index].isHovered = hovered;
  }

  // Método para enviar datos al componente principal
  changeMainContent(data: ContentData): void {
    this.sidebarService.setContent(data);
  }

  // Variable para controlar el clic en el botón de cerrar sesión
  logoutClicked = false;

  // Método para manejar el clic en el botón de cerrar sesión
  logout(): void {
    // Establece logoutClicked a true para activar la animación de salida
    this.logoutClicked = true;
    // Después de un breve retardo, restablece logoutClicked a false
    setTimeout(() => {
      this.logoutClicked = false;
    }, 550);
  }
}
