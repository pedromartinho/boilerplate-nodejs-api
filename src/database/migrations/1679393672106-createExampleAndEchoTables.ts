import { MigrationInterface, QueryRunner } from "typeorm";

export class createExampleAndEchoTables1679393672106 implements MigrationInterface {
    name = 'createExampleAndEchoTables1679393672106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "echos" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "exampleId" integer, CONSTRAINT "PK_ce33dff8ef500e6263f3faeed38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "examples" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "PK_ea56499b0a3a29593d3405080e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "echos" ADD CONSTRAINT "FK_74dbd0cba20979cd47aa0f9c039" FOREIGN KEY ("exampleId") REFERENCES "examples"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "echos" DROP CONSTRAINT "FK_74dbd0cba20979cd47aa0f9c039"`);
        await queryRunner.query(`DROP TABLE "examples"`);
        await queryRunner.query(`DROP TABLE "echos"`);
    }

}
