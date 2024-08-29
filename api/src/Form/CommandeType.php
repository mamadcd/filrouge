<?php

namespace App\Form;

use App\Entity\Commande;
use App\Entity\LigneCommande;
use App\Entity\Livraison;
use App\Entity\Utilisateur;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CommandeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('date_commande', null, [
                'widget' => 'single_text',
            ])
            ->add('typeCommande')
            ->add('statusDevis')
            ->add('utilisateur', EntityType::class, [
                'class' => Utilisateur::class,
                'choice_label' => 'id',
            ])
            ->add('livraison', EntityType::class, [
                'class' => Livraison::class,
                'choice_label' => 'id',
            ])
            ->add('ligneCommande', EntityType::class, [
                'class' => LigneCommande::class,
                'choice_label' => 'id',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Commande::class,
        ]);
    }
}
