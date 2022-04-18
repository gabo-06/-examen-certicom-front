export class SerializationHelper {

  public static ShallowCopy(item: any): any {
    return JSON.parse(JSON.stringify(item));
  }

}
