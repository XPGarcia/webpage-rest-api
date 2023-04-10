export class Education {
  id?: string;
  dateFrom: Date;
  dateTo?: Date;
  title: string;
  institution: string;
  description: string;

  constructor({
    id,
    dateFrom,
    dateTo,
    title,
    institution,
    description,
  }: {
    id?: string;
    dateFrom: Date;
    dateTo?: Date;
    title: string;
    institution: string;
    description: string;
  }) {
    this.id = id;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.title = title;
    this.institution = institution;
    this.description = description;
  }
}
