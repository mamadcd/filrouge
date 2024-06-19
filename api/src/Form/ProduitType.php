<?php

namespace App\Form;

use App\Entity\HistoriquePrix;
use App\Entity\Produit;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProduitType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('epaisseur')
            ->add('hauteur')
            ->add('largeur')
            ->add('kg_par_m')
            ->add('prix_par_kg')
            ->add('hebhea')
            ->add('epaisseur_semelle')
            ->add('epaisseur_lame')
            ->add('hauteur_lame')
            ->add('largeur_semelle')
            ->add('section_cm2')
            ->add('diametre_exterieur')
            ->add('hauteur_aile')
            ->add('historiquePrix', EntityType::class, [
                'class' => HistoriquePrix::class,
'choice_label' => 'id',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Produit::class,
        ]);
    }
}
