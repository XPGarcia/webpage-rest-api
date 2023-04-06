import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateEducation1680789908562 implements MigrationInterface {
  TABLE_NAME = 'education';

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
          name: 'userId',
          type: 'uuid',
          isUnique: false,
          isNullable: false,
        },
        {
          name: 'dateFrom',
          type: 'date',
          isNullable: false,
        },
        {
          name: 'dateTo',
          type: 'date',
          isNullable: true,
        },
        {
          name: 'title',
          type: 'varchar',
          length: '255',
          isNullable: false,
        },
        {
          name: 'institution',
          type: 'varchar',
          length: '255',
          isNullable: false,
        },
        {
          name: 'description',
          type: 'text',
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);

    await queryRunner.createForeignKey(
      this.TABLE_NAME,
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.TABLE_NAME);
  }
}
