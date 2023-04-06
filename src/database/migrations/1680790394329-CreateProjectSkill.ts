import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateProjectSkill1680790394329 implements MigrationInterface {
  TABLE_NAME = 'project_skill';

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
          name: 'projectId',
          type: 'uuid',
          isUnique: false,
          isNullable: false,
        },
        {
          name: 'skillId',
          type: 'uuid',
          isUnique: false,
          isNullable: false,
        },
      ],
    });
    await queryRunner.createTable(table);

    await queryRunner.createForeignKey(
      this.TABLE_NAME,
      new TableForeignKey({
        columnNames: ['projectId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'project',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      this.TABLE_NAME,
      new TableForeignKey({
        columnNames: ['skillId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'skill',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.TABLE_NAME);
  }
}
