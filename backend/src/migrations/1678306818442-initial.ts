import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1678306818442 implements MigrationInterface {
    name = 'initial1678306818442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price_adverts_formatted"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price_adverts"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price_adverts" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price_adverts"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price_adverts" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price_adverts_formatted" character varying NOT NULL`);
    }

}
