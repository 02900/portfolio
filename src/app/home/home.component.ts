import { Component } from '@angular/core';
import { parcelamiento } from 'src/app/constant/parcelamiento';
import { mobiliario } from 'src/app/constant/dist-mobiliario';
import { estacionamiento } from 'src/app/constant/distrubucion-estacionamiento';
import { mapasGeo } from 'src/app/constant/mapas-geo';
import { modelado3d } from 'src/app/constant/modelado3d';
import { plantasArq } from 'src/app/constant/plantasArq';
import { IProject } from 'src/app/project.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'h-100' },
})
export class HomeComponent {
  public readonly parcelamiento: IProject[] = parcelamiento;
  public readonly mobiliario: IProject[] = mobiliario;
  public readonly estacionamiento: IProject[] = estacionamiento;
  public readonly mapasGeo: IProject[] = mapasGeo;
  public readonly modelado3d: IProject[] = modelado3d;
  public readonly plantasArq: IProject[] = plantasArq;
}
