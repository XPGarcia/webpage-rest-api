import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateSocialMedia1680787572803 implements MigrationInterface {
  TABLE_NAME = 'social_media';

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
          name: 'github',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'linkedin',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'twitter',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'facebook',
          type: 'varchar',
          length: '255',
          isNullable: true,
        },
        {
          name: 'instagram',
          type: 'varchar',
          length: '255',
          isNullable: true,
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
