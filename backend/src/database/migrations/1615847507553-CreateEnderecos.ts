import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEnderecos1615847507553 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'enderecos',
				columns: [
					{
						name: 'id',
						type: 'uuid',
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
					{
						name: 'usuario_id',
						type: 'uuid',
						isNullable: true
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

		await queryRunner.createForeignKey('enderecos', new TableForeignKey({
			name: 'EnderecoUsuario',
			columnNames: ['usuario_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'usuarios',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE'
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('enderecos', 'EnderecoUsuario');
		await queryRunner.dropColumn('enderecos', 'usuario_id');
		await queryRunner.dropTable('enderecos');
	}

}
