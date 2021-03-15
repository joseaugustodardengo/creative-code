import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsuarios1615847392119 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'usuarios',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name: 'nome',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'telefone',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'email',
						type: 'varchar',
						isNullable: false,
						isUnique: true
					},
					{
						name: 'senha',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'idade',
						type: 'int',
						isNullable: false
					},
					{
						name: 'peso',
						type: 'decimal',
						isNullable: false
					},
					{
						name: 'etnia',
						type: 'enum',
						enum: ['branco', 'negro', 'indigena', 'pardo'],
						isNullable: false
					},
					{
						name: 'role',
						type: 'enum',
						enum: ['admin', 'basico'],
						isNullable: false
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
			}),
			true
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('usuarios');
	}
}
