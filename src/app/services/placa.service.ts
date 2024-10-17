import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface PlacaRequestDTO {
    placa: string;
    fechaHora: string;
}

interface PlacaResponseDTO {
    placa: string;
    circulacion: boolean;
    mensaje: string;
}

@Injectable({
    providedIn: 'root'
})

export class PlacaService {

    //private apiUrl = 'http://localhost:8080/api/v1/placas';
    private apiUrl = 'https://picoplacaapi-latest.onrender.com/api/v1/placas';


    constructor(private http: HttpClient) { }

    validarPlaca(placaRequest: PlacaRequestDTO): Observable<PlacaResponseDTO> {
        return this.http.post<PlacaResponseDTO>(`${this.apiUrl}/validar`, placaRequest);
        console.log('Solicitud enviada:', placaRequest);
        //return this.http.post<PlacaResponseDTO>(this.apiUrl, placaRequest);
    }


}