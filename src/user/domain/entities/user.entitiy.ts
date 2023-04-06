export class User {
  id?: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phone?: string;
  address?: string;
  description: string;
  available: boolean;
  nationality: string;

  constructor({
    id,
    firstName,
    lastName,
    role,
    email,
    phone,
    address,
    description,
    available,
    nationality,
  }: {
    id?: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    phone?: string;
    address?: string;
    description: string;
    available: boolean;
    nationality: string;
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.description = description;
    this.available = available;
    this.nationality = nationality;
  }
}
