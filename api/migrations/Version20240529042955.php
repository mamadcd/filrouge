<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240529042955 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE barre_en_stock DROP INDEX UNIQ_A839066ADCD6110, ADD INDEX IDX_A839066ADCD6110 (stock_id)');
        $this->addSql('ALTER TABLE barre_en_stock DROP INDEX UNIQ_A839066AF347EFB, ADD INDEX IDX_A839066AF347EFB (produit_id)');
        $this->addSql('ALTER TABLE barre_en_stock CHANGE longueur longueur DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE barre_en_stock DROP INDEX IDX_A839066ADCD6110, ADD UNIQUE INDEX UNIQ_A839066ADCD6110 (stock_id)');
        $this->addSql('ALTER TABLE barre_en_stock DROP INDEX IDX_A839066AF347EFB, ADD UNIQUE INDEX UNIQ_A839066AF347EFB (produit_id)');
        $this->addSql('ALTER TABLE barre_en_stock CHANGE longueur longueur DOUBLE PRECISION NOT NULL');
    }
}
