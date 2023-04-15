import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class CreateProject1680787474897 implements MigrationInterface {
  TABLE_NAME = 'project';

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
          name: 'code',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'title',
          type: 'varchar',
          length: '100',
          isNullable: false,
        },
        {
          name: 'imageUrl',
          type: 'varchar',
          length: '255',
          isNullable: false,
        },
        {
          name: 'clientName',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'previewUrl',
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
          name: 'bulletPoints',
          type: 'text',
          isArray: true,
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

    await queryRunner.createIndex(
      this.TABLE_NAME,
      new TableIndex({
        name: `${this.TABLE_NAME}_ix_userId_code`,
        columnNames: ['userId', 'code'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.TABLE_NAME);
  }
}
