<?php

namespace App\Controller;

use App\Repository\UtilisateurRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class UtilisateurController extends AbstractController
{
    //private $manager;
    private $user;

    public function __construct(EntityManagerInterface $manager, UtilisateurRepository $user)
    {
        // $this->manager = $manager;
        $this->user = $user;
    }

    #[Route('/utilisateur', name: 'app_utilisateur', methods: ['GET'])]
    public function getAllUser(): JsonResponse
    {

        $user = $this->user->findAll();
        return $this->Json($user, 200);
    }
}
