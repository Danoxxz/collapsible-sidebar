import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContentData } from '../interfaces/content-data.interface';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // BehaviorSubject para almacenar y emitir los datos del contenido
  private contentSubject = new BehaviorSubject<ContentData>({
    title: '', // Título por defecto
    icon: '', // Ícono por defecto
  });

  // Observable para que los componentes se suscriban y reciban los datos del contenido
  content$: Observable<ContentData> = this.contentSubject.asObservable();

  constructor() {}

  // Método para establecer los datos del contenido
  setContent(data: ContentData): void {
    this.contentSubject.next(data);
  }
}
