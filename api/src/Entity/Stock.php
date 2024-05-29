<?php

namespace App\Entity;

use App\Repository\StockRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StockRepository::class)]
class Stock
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $entrepot = null;

    /**
     * @var Collection<int, BarreEnStock>
     */
    #[ORM\OneToMany(targetEntity: BarreEnStock::class, mappedBy: 'stock')]
    private Collection $barreEnStocks;

    public function __construct()
    {
        $this->barreEnStocks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEntrepot(): ?string
    {
        return $this->entrepot;
    }

    public function setEntrepot(string $entrepot): static
    {
        $this->entrepot = $entrepot;

        return $this;
    }

    /**
     * @return Collection<int, BarreEnStock>
     */
    public function getBarreEnStocks(): Collection
    {
        return $this->barreEnStocks;
    }

    public function addBarreEnStock(BarreEnStock $barreEnStock): static
    {
        if (!$this->barreEnStocks->contains($barreEnStock)) {
            $this->barreEnStocks->add($barreEnStock);
            $barreEnStock->setStock($this);
        }

        return $this;
    }

    public function removeBarreEnStock(BarreEnStock $barreEnStock): static
    {
        if ($this->barreEnStocks->removeElement($barreEnStock)) {
            // set the owning side to null (unless already changed)
            if ($barreEnStock->getStock() === $this) {
                $barreEnStock->setStock(null);
            }
        }

        return $this;
    }
}
