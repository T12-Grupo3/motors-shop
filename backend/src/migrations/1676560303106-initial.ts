import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1676560303106 implements MigrationInterface {
    name = 'initial1676560303106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title_adverts" character varying(200) NOT NULL, "year_adverts" character varying(10) NOT NULL, "type_adverts" character varying(50) NOT NULL, "kilometers_adverts" character varying(20) NOT NULL, "description_adverts" character varying(240) NOT NULL, "isAvailable" boolean NOT NULL DEFAULT true, "createdAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "adverts"`);
    }

}
