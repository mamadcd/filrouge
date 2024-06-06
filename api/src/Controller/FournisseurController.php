<?php

namespace App\Controller;

use App\Entity\Fournisseur;
use App\Repository\FournisseurRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class FournisseurController extends AbstractController
{
    //Récupèration des fournisseurs
    #[Route('api/fournisseur', name: 'app_api_fournisseur', methods: ["GET"])]
    public function recupFournisseur(FournisseurRepository $fournisseurRepository): JsonResponse
    {
        $produit = $fournisseurRepository->findAll();
        return $this->json($produit, 200, [], ["groups" => "avoirFournisseur"]);
    }
    //Ajouter un nouveau fournisseur
    #[Route('api/fournisseur/post', name: 'app_api_post_fournisseur', methods: ["POST"])]
    public function ajoutFournisseur(SerializerInterface $serializer, EntityManagerInterface $em, Request $request): JsonResponse
    {
        $jsonRecu = $request->getContent();
        $fournisseur = $serializer->deserialize($jsonRecu, Fournisseur::class, "json");
        dd($fournisseur);

        $em->persist($fournisseur);
        $em->flush();

        return $this->json($fournisseur, 201, [], ["groups" => "avoirFournisseur"]);
    }

    #[Route('/api/fournisseur/{id}/delete', name: 'api_api_fournisseur_delete', methods: ['DELETE'])]
    public function editeFournisseur(Fournisseur $fournisseur, EntityManagerInterface $em): JsonResponse
    {
        $em->persist($fournisseur);
        $em->flush();

        return $this->json(null, JsonResponse::HTTP_PARTIAL_CONTENT);
    }
    //Supprimer un forunisseur
    #[Route('/api/fournisseur/{id}/delete', name: 'api_api_fournisseur_delete', methods: ['DELETE'])]
    public function supprimeFournisseur(Fournisseur $fournisseur, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($fournisseur);
        $em->flush();

        return $this->json($fournisseur, 201, [], ["groups" => "avoirFournisseur"]);
    }
}
