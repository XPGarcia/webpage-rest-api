import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateLanguage1680788959832 implements MigrationInterface {
  TABLE_NAME = 'language';

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
          name: 'name',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'level',
          type: 'smallint',
          unsigned: true,
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