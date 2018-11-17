export class ChartSeriesModel {
    public name: string;
    public series: SeriesModel[];
    constructor(name: string, series:  SeriesModel[]) {
        this.name = name;
        this.series = series;
    }
}

export class SeriesModel {
    public name: string;
    public value: number;
    constructor(name:  string, value: number) {
        this.name = name;
        this.value = value;
    }
}
