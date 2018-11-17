export class ChartSeriesModel {
    public data: SeriesModel[];
    constructor(data:  SeriesModel[]) {
        this.data = data;
    }
}

export class SeriesModel {
    public name: string;
    public series: SeriersChildModel[];
    constructor(name:  string, series: SeriersChildModel[]) {
        this.name = name;
        this.series = series;
    }
}

export class SeriersChildModel {
    public name: string;
    public value: number;
    constructor(name:  string, value: number) {
        this.name = name;
        this.value = value;
    }
}
