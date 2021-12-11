export enum TagVersion {
    v22 = 'ID3v2.2',
    v23 = 'ID3v2.3',
    v24 = 'ID3v2.4',
    unknown = 'unknown',
}

export class Chapter {
    public elementID?: string;
    public startTimeMs?: number;
    public endTimeMs?: number;
    public startOffsetBytes?: number;
    public endOffsetBytes?: number;
    public tags?: object;
}
