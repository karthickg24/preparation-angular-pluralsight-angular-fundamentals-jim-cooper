export interface IEvent {
    id:        number;
    name:      string;
    date:      Date;
    time:      string;
    price:     number;
    imageUrl:  string;
    location?:  ILocation;
    onlineUrl?: string;
    sessions?: ISession[];
}

export interface ILocation {
    address: string;
    city:    string;
    country: string;
}

export interface ISession {
    id: number;
    name: string;
    presenter: number;
    duration: number;
    level: string;
    abstract: string;
    voters?: string[];
}
