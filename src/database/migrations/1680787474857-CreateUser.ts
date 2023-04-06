import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1680787474857 implements MigrationInterface {
  TABLE_NAME = 'user';

  public async up(queryRunner: QueryRunner): Promise<any> {
    const table = new Table({
      name: this.TABLE_NAME,
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isUnique: true,
          generationStrategy: 'uuid',
          default: `uuid_generate_v4()`,
        },
        {
          name: 'first_name',
          type: 'varchar',
          length: '50',
          isNullable: false,
        },
        {
          name: 'last_name',
          type: 'varchar',
          length: '50',
          isNullable: false,
        },
        {
          name: 'role',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '20',
          isNullable: true,
        },
        {
          name: 'nationality',
          type: 'varchar',
          length: '50',
          isNullable: false,
        },
        {
          name: 'address',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'description',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'available',
          type: 'boolean',
          isNullable: false,
          default: true,
        },
      ],
    });
    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.TABLE_NAME);
  }
}