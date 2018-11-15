export class ChartDataModel {
    public data: SerieModel[];
    constructor(data:  SerieModel[]) {
        this.data = data;
    }
}

export class SerieModel {
    public name: string;
    public value: number;
    constructor(name:  string, value: number) {
        this.name = name;
        this.value = value;
    }
}