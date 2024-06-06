<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240606001326 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commande CHANGE type_commande type_commande VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE produit CHANGE epaisseur epaisseur DOUBLE PRECISION DEFAULT NULL, CHANGE hauteur hauteur DOUBLE PRECISION DEFAULT NULL, CHANGE largeur largeur DOUBLE PRECISION DEFAULT NULL, CHANGE hebhea hebhea INT DEFAULT NULL, CHANGE epaisseur_semelle epaisseur_semelle DOUBLE PRECISION DEFAULT NULL, CHANGE epaisseur_lame epaisseur_lame DOUBLE PRECISION DEFAULT NULL, CHANGE hauteur_lame hauteur_lame DOUBLE PRECISION DEFAULT NULL, CHANGE largeur_semelle largeur_semelle DOUBLE PRECISION DEFAULT NULL, CHANGE section_cm2 section_cm2 DOUBLE PRECISION DEFAULT NULL, CHANGE diametre_exterieur diametre_exterieur DOUBLE PRECISION DEFAULT NULL, CHANGE hauteur_aile hauteur_aile DOUBLE PRECISION DEFAULT NULL');
        $this->addSql('ALTER TABLE utilisateur ADD password VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commande CHANGE type_commande type_commande VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE produit CHANGE epaisseur epaisseur DOUBLE PRECISION NOT NULL, CHANGE hauteur hauteur DOUBLE PRECISION NOT NULL, CHANGE largeur largeur DOUBLE PRECISION NOT NULL, CHANGE hebhea hebhea INT NOT NULL, CHANGE epaisseur_semelle epaisseur_semelle DOUBLE PRECISION NOT NULL, CHANGE epaisseur_lame epaisseur_lame DOUBLE PRECISION NOT NULL, CHANGE hauteur_lame hauteur_lame DOUBLE PRECISION NOT NULL, CHANGE largeur_semelle largeur_semelle DOUBLE PRECISION NOT NULL, CHANGE section_cm2 section_cm2 DOUBLE PRECISION NOT NULL, CHANGE diametre_exterieur diametre_exterieur DOUBLE PRECISION NOT NULL, CHANGE hauteur_aile hauteur_aile DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE utilisateur DROP password');
    }
}
