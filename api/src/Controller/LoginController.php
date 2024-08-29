<?php

namespace App\Controller;

use App\Entity\Utilisateur;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;



class LoginController extends AbstractController
{

    #  #[Route(path: 'api/login', name: 'app_login', methods: ['POST'])]/* 
    // public function apiLogin(#[CurrentUser] ?Utilisateur $user): Response    //currentUser récupère l'utilisateur courant

    //  {
    /*  if (null === $user) {
            return $this->json([
                'message' => 'missing credentials',
            ], Response::HTTP_UNAUTHORIZED);
        } */

    /*  return $this->json([
            'message' => 'Welcome to your new controller!',
            'user'  => $user->getUserIdentifier()
            //'token' => $token,
        ]);
    } */
}
