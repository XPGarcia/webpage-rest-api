export class Certification {
  id?: string;
  date: Date;
  title: string;
  institution: string;
  description: string;

  constructor({
    id,
    date,
    title,
    institution,
    description,
  }: {
    id?: string;
    date: Date;
    title: string;
    institution: string;
    description: string;
  }) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.institution = institution;
    this.description = description;
  }
}
