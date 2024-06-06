<?php

namespace App\Controller;

use App\Repository\ProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProduitController extends AbstractController
{
    #[Route('/api/produit', name: 'api_produit', methods: ["GET"])]

    public function afficherProduit(ProduitRepository $produitRepository): JsonResponse
    {
        $produit = $produitRepository->findAll();
        return $this->json($produit, 200, [], ["groups" => "recupereProduit"]);
    }
}
