import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEnderecos1615816164315 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'enderecos',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name: 'endereco',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'numero',
						type: 'int',
						isNullable: false
					},
					{
						name: 'complemento',
						type: 'varchar',
						isNullable: true
					},
					{
						name: 'cep',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'cidade',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'estado',
						type: 'varchar',
						isNullable: false
					},
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('enderecos');
	}

}
