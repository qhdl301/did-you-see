interface EnvironmentInterface {
  token : string;
}

export interface BoxOfficeListInterface extends EnvironmentInterface{
  serviceUrl:string;
  targetDt: string;
}

export interface BoxOfficeDetailInterface extends EnvironmentInterface{
  serviceUrl:string;
}