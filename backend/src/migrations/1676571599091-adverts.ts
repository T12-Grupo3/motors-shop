import { MigrationInterface, QueryRunner } from "typeorm";

export class adverts1676571599091 implements MigrationInterface {
    name = 'adverts1676571599091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" ADD "type_veicule" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "type_veicule"`);
    }

}
