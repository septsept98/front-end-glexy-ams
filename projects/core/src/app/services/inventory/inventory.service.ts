import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Inventory } from '../../model/inventory';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Inventory[]> | undefined {
    return this.http.get<Inventory[]>(`${baseUrl}inventories/`)??""
  }

  insert(data : Inventory) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}inventories/`, data)??""
  }

  update(data : Inventory): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}inventories/`, data)??""
  }

  getByName(name : string) : Observable<Inventory[]> | undefined {
    return this.http.get<Inventory[]>(`${baseUrl}inventories/?nameAsset=${name}`)??""
  }

  getById(id : string) : Observable<Inventory> | undefined {
    return this.http.get<Inventory>(`${baseUrl}inventories/${id}`)??""
  }

  getByCode(code : string) : Observable<Inventory> | undefined {
    return this.http.get<Inventory>(`${baseUrl}inventories/${code}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}inventories/${id}`)??""
  }
}
