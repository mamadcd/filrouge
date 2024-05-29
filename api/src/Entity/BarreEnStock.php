<?php

namespace App\Entity;

use App\Repository\BarreEnStockRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BarreEnStockRepository::class)]
class BarreEnStock
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?float $longueur = null;

    #[ORM\Column]
    private ?int $nombreBarre = null;

    #[ORM\ManyToOne(inversedBy: 'barreEnStocks')]
    private ?Stock $stock = null;

    #[ORM\ManyToOne(inversedBy: 'barreEnStocks')]
    private ?Produit $produit = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLongueur(): ?float
    {
        return $this->longueur;
    }

    public function setLongueur(float $longueur): static
    {
        $this->longueur = $longueur;

        return $this;
    }

    public function getNombreBarre(): ?int
    {
        return $this->nombreBarre;
    }

    public function setNombreBarre(int $nombreBarre): static
    {
        $this->nombreBarre = $nombreBarre;

        return $this;
    }

    public function getStock(): ?Stock
    {
        return $this->stock;
    }

    public function setStock(?Stock $stock): static
    {
        $this->stock = $stock;

        return $this;
    }

    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(?Produit $produit): static
    {
        $this->produit = $produit;

        return $this;
    }
}
