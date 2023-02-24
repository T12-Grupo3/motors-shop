import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677247397447 implements MigrationInterface {
    name = 'initial1677247397447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image_adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image_adverts" character varying(200) NOT NULL, "description_image" character varying(240) NOT NULL, "createdAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "advertId" uuid, CONSTRAINT "PK_659bf469f2505bae5d23c71280d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title_adverts" character varying(200) NOT NULL, "year_adverts" character varying(10) NOT NULL, "type_adverts" character varying(50) NOT NULL, "type_veicule" character varying(50) NOT NULL, "kilometers_adverts" character varying(20) NOT NULL, "price_adverts" integer NOT NULL, "description_adverts" character varying(240) NOT NULL, "isAvailable" boolean NOT NULL DEFAULT true, "createdAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image_adverts" ADD CONSTRAINT "FK_e8e2612fad27eb1bae25d650717" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image_adverts" DROP CONSTRAINT "FK_e8e2612fad27eb1bae25d650717"`);
        await queryRunner.query(`DROP TABLE "adverts"`);
        await queryRunner.query(`DROP TABLE "image_adverts"`);
    }

}
