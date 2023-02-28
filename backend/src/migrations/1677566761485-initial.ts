import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677566761485 implements MigrationInterface {
    name = 'initial1677566761485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image_adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image_adverts" character varying(200) NOT NULL, "description_image" character varying(240) NOT NULL, "createdAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "advertId" uuid, CONSTRAINT "PK_659bf469f2505bae5d23c71280d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(69) NOT NULL, "zipCode" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comments" character varying(200) NOT NULL, "createdAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "advertsId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "email" character varying(69) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying(69) NOT NULL, "phone_number" character varying(69) NOT NULL, "description_user" character varying(200) NOT NULL, "birth_date" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "isAdm" boolean NOT NULL DEFAULT false, "isActive" boolean NOT NULL DEFAULT true, "addressId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title_adverts" character varying(200) NOT NULL, "year_adverts" character varying(10) NOT NULL, "type_adverts" character varying(50) NOT NULL, "type_veicule" character varying(50) NOT NULL, "kilometers_adverts" character varying(20) NOT NULL, "price_adverts" integer NOT NULL, "description_adverts" character varying(240) NOT NULL, "isAvailable" boolean NOT NULL DEFAULT true, "createdAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt_adverts" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image_adverts" ADD CONSTRAINT "FK_e8e2612fad27eb1bae25d650717" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_ec5eb1ef74b55d25b514670c5c0" FOREIGN KEY ("advertsId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_ec5eb1ef74b55d25b514670c5c0"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "image_adverts" DROP CONSTRAINT "FK_e8e2612fad27eb1bae25d650717"`);
        await queryRunner.query(`DROP TABLE "adverts"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "image_adverts"`);
    }

}
