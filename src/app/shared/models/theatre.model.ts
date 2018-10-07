export interface TheatreModel {
  id: number;
  cinema: {
    id: number,
    address: string,
    name: string
  };
  screenName: number;
}
