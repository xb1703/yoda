-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 04 mars 2019 à 12:01
-- Version du serveur :  10.1.33-MariaDB
-- Version de PHP :  7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db_yoga`
--

-- --------------------------------------------------------

--
-- Structure de la table `postures`
--

CREATE TABLE `postures` (
  `id` int(11) NOT NULL,
  `name` varchar(85) NOT NULL,
  `description` text NOT NULL,
  `picture` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `postures`
--

INSERT INTO `postures` (`id`, `name`, `description`, `picture`, `created_at`, `updated_at`) VALUES
(1, 'Le lotus', 'Position : assise, jambes en tailleur, idéalement les pieds posés sur les cuisses. Bras relâchés presque tendus, mains déposées sur les genoux, paumes vers le ciel, index et pouce pincés en \"chin mudra\" (attitude de la sagesse ou de la conscience)', 'https://images.cdn-outlet.com/yo-userfiles/Guide/image/Yoga/Yoga_How-to-do-lotus-pose_01_300x350.jpg', '2019-03-05 00:00:00', '2019-03-06 00:00:00'),
(2, 'La pince assise', 'Posture : assise au sol, jambes tendues, pieds flexes. Tenter de coller le visage aux jambes en attrapant vos poignets derrière les plantes de pied. Doigts de la main tenue en \"chin mudra\" (attitude de la sagesse ou de la conscience).\r\nSi vous n\'êtes pas assez souple, utilisez une sangle ou une écharpe que vous tenez entre vous mains et qui passe derrière vos plantes de pieds', 'https://diva-yoga.com/wp-content/uploads/2016/01/pince-assise-2-600x300.jpg', '2019-03-06 00:00:00', '2019-03-05 00:00:00'),
(3, 'Le guerrier ', 'Position (débutants) : Jambe avant fléchie, pied avant dans l’alignement du tapis. Jambe arrière tendue, pied arrière presque perpendiculaire au pied avant. BUste et bassin de face. Bras tendus, mains jointes en prière vers le ciel.', 'https://therapeutesmagazine.com/wp-content/uploads/2016/09/guerrier-600x445.jpg', '2019-03-06 00:00:00', '2019-03-28 00:00:00'),
(4, 'Le triangle', 'Position : Jambes écartées tendues. Pied à l’avant dans l’alignement du tapis, pied arrière perpendiculaire au pied avant. La main avant est posée sur le tibia, la main arrière, doigts serrés, monte vers le ciel.', 'https://monyogavirtuel.com/static/images/0-0x0/2013/09/2013-09-27-Triangle-Triangle-pose-Trikonasana.jpg', '2019-03-13 00:00:00', '2019-03-28 00:00:00'),
(5, 'L\'arbre', 'Position : Debout sur une jambe. L’autre repliée et le pied posé sur le creux de la cuisse opposée, et surtout pas sur l\'articulation. Bras tendus vers le ciel, mains jointes. Visage face. Rentrer le nombril.', 'https://ebookcvm.contentoro.net/eBookC/Books/45/Images/TreePose.jpg', '2019-03-04 00:00:00', '2019-03-05 00:00:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `postures`
--
ALTER TABLE `postures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `postures`
--
ALTER TABLE `postures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
