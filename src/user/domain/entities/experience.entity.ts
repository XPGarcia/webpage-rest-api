export class Experience {
  id?: string;
  dateFrom: Date;
  dateTo?: Date;
  role: string;
  company: string;
  description: string;

  constructor({
    id,
    dateFrom,
    dateTo,
    role,
    company,
    description,
  }: {
    id?: string;
    dateFrom: Date;
    dateTo?: Date;
    role: string;
    company: string;
    description: string;
  }) {
    this.id = id;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.role = role;
    this.company = company;
    this.description = description;
  }
}
