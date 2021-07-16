export class Category {
  constructor(
    public id: number,
    public CreateDate: Date,
    public isDelete: boolean,
    public LastUpdateDate: Date,
    public title: string
  ) {
  }
}
