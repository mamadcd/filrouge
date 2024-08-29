<?php

namespace App\Entity;

use App\Repository\CommandeRepository;
use Doctrine\ORM\Mapping as ORM;
use InvalidArgumentException;

#[ORM\Entity(repositoryClass: CommandeRepository::class)]
class Commande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(nullable: false)]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $date_commande = null;

    #[ORM\Column(length: 255)]
    private ?string $typeCommande = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $statusDevis = null;

    #[ORM\ManyToOne(inversedBy: 'commandes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Utilisateur $utilisateur = null;

    #[ORM\ManyToOne(inversedBy: 'commandes')]
    private ?Livraison $livraison = null;

    #[ORM\OneToOne(mappedBy: 'commande', cascade: ['persist', 'remove'])]
    private ?LigneCommande $ligneCommande = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateCommande(): ?\DateTimeImmutable
    {
        return $this->date_commande;
    }

    public function setDateCommande(\DateTimeImmutable $date_commande): static
    {
        $this->date_commande = $date_commande;

        return $this;
    }

    const TYPE_COMMANDE = 'commande';
    const TYPE_DEVIS = 'devis';
    const TYPE_ENVIE = 'envie';
    public function getTypeCommande(): ?string
    {
        return $this->typeCommande;
    }

    public function setTypeCommande(?string $typeCommande)
    {
        if (!in_array($typeCommande, array(self::TYPE_COMMANDE, self::TYPE_DEVIS, self::TYPE_ENVIE))) {
            throw new InvalidArgumentException('Type de Commande Invalide');
        }

        $this->typeCommande = $typeCommande;
    }

    const STATUS_EN_Cours = 'en_cours';
    const STATUS_TRAITE = 'traite';
    const STATUS_VALIDE = 'valide';

    public function getStatusDevis(): ?string
    {
        return $this->statusDevis;
    }


    public function setStatusDevis(?string $statusDevis)
    {
        //$this->statusDevis = $statusDevis;
        if (!in_array($statusDevis, array(self::STATUS_EN_Cours, self::STATUS_TRAITE, self::STATUS_VALIDE))) {
            throw new InvalidArgumentException("status invalide");
        }
        $this->statusDevis = $statusDevis;
    }

    public function getUtilisateur(): ?Utilisateur
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?Utilisateur $utilisateur): static
    {
        $this->utilisateur = $utilisateur;

        return $this;
    }

    public function getLivraison(): ?Livraison
    {
        return $this->livraison;
    }

    public function setLivraison(?Livraison $livraison): static
    {
        $this->livraison = $livraison;

        return $this;
    }

    public function getLigneCommande(): ?LigneCommande
    {
        return $this->ligneCommande;
    }

    public function setLigneCommande(?LigneCommande $ligneCommande): static
    {
        // unset the owning side of the relation if necessary
        if ($ligneCommande === null && $this->ligneCommande !== null) {
            $this->ligneCommande->setCommande(null);
        }

        // set the owning side of the relation if necessary
        if ($ligneCommande !== null && $ligneCommande->getCommande() !== $this) {
            $ligneCommande->setCommande($this);
        }

        $this->ligneCommande = $ligneCommande;

        return $this;
    }
}
