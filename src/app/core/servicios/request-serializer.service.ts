import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RequestSerializerService
{

  constructor(
    private router: Router,
    private serializer: UrlSerializer,
    private datePipe: DatePipe
  ) { }

  public ObtenerFormDataDesdeObjecto(object: Object, form?: FormData, namespace?: string): FormData
  {
    const formData = form || new FormData();
    for (let property in object)
    {
      if (!object.hasOwnProperty(property) || !object[property])
      {
        continue;
      }
      const formKey = namespace
        ? (object[property] instanceof File ? namespace : `${ namespace }[${ property }]`)
        : property;
      if (object[property] instanceof Date)
      {
        formData.append(formKey, object[property].toISOString());
      } else if (typeof object[property] === 'object' && !(object[property] instanceof File))
      {
        this.ObtenerFormDataDesdeObjecto(object[property], formData, formKey);
      } else
      {
        formData.append(formKey, object[property]);
      }
    }
    return formData;
  }

  public ObtenerQueryStringDesdeObjeto(request: any): string
  {
    request = this.TransformarFechaStandar(request);
    const tree = this.router.createUrlTree([], { queryParams: request });
    const params = this.serializer.serialize(tree);
    const split = params.split('?');
    if (split.length <= 1)
    {
      return '';
    }
    const parameters = split[split.length - 1];
    return parameters;
  }

  private TransformarFechaStandar(object: any): any
  {
    if (object instanceof Date)
    {
      return this.datePipe.transform(object, 'yyyy-MM-ddTHH:mm:ss');
    }
    else if (typeof object === 'object')
    {
      for (let key in object)
      {
        var value = object[key];
        object[key] = this.TransformarFechaStandar(value);
      }
    }
    return object;
  }
}
