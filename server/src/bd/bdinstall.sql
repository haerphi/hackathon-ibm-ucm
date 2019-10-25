-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 25, 2019 at 06:07 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ucm`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id_answer_pk` int(11) NOT NULL,
  `answer` text COLLATE utf8_unicode_ci NOT NULL,
  `user_fk` int(11) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id_answer_pk`, `answer`, `user_fk`, `creation_date`) VALUES
(1, 'Un plan financier prévisionnel est obligatoire si vous souhaitez constituer une société à responsabilité limitée (SRL, SA, SC). Il sera également exigé si  vous souhaitez emprunter des fonds auprès d’une banque ou si vous sollicitez le bénéfice de certaines aides.\r\n\r\nDans d’autres cas, même s’il n’est pas légalement ou contractuellement obligatoire, le plan financier reste vivement conseillé.\r\n\r\nUCM et son service de Développement Economique (rubrique \"Entreprendre\") sont à votre disposition pour en parler et pour élaborer votre plan de route économique et financier.', 2, '2019-10-25 16:03:09');

-- --------------------------------------------------------

--
-- Table structure for table `answers_x_categories`
--

CREATE TABLE `answers_x_categories` (
  `id_categorie_fk` int(11) NOT NULL,
  `id_answer_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `answers_x_categories`
--

INSERT INTO `answers_x_categories` (`id_categorie_fk`, `id_answer_fk`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `answers_x_job_domains`
--

CREATE TABLE `answers_x_job_domains` (
  `id_job_domain_fk` int(11) NOT NULL,
  `id_answer_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `answers_x_job_domains`
--

INSERT INTO `answers_x_job_domains` (`id_job_domain_fk`, `id_answer_fk`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `answers_x_path_steps`
--

CREATE TABLE `answers_x_path_steps` (
  `id_path_step_fk` int(11) NOT NULL,
  `id_answer_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `answers_x_path_steps`
--

INSERT INTO `answers_x_path_steps` (`id_path_step_fk`, `id_answer_fk`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id_categorie_pk` int(11) NOT NULL,
  `label` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id_categorie_pk`, `label`, `description`) VALUES
(1, 'VAT', ''),
(2, 'Hiring', '');

-- --------------------------------------------------------

--
-- Table structure for table `claims`
--

CREATE TABLE `claims` (
  `id_claim_pk` int(11) NOT NULL,
  `id_question_fk` int(11) NOT NULL,
  `id_user_fk` int(11) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `claims`
--

INSERT INTO `claims` (`id_claim_pk`, `id_question_fk`, `id_user_fk`, `creation_date`) VALUES
(1, 2, 2, '2019-10-25 16:06:19');

-- --------------------------------------------------------

--
-- Table structure for table `job_domains`
--

CREATE TABLE `job_domains` (
  `id_job_domain_pk` int(11) NOT NULL,
  `label` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `job_domains`
--

INSERT INTO `job_domains` (`id_job_domain_pk`, `label`, `description`) VALUES
(1, 'Administration & Legislation', ''),
(2, 'Building & construction', ''),
(3, 'Communication', ''),
(4, 'Culture', ''),
(5, 'Economics & Management', ''),
(6, 'Environment & Nature', ''),
(7, 'Hotels & Food', ''),
(8, 'IT and telecommunications', ''),
(9, 'Health & Well-being', ''),
(10, 'Science', ''),
(11, 'Humanities & Social Sciences', ''),
(12, 'Security', ''),
(13, 'Technical & Industry', ''),
(14, 'Tourism, sport and leisure', ''),
(15, 'Transport & logistics', '');

-- --------------------------------------------------------

--
-- Table structure for table `legal_status`
--

CREATE TABLE `legal_status` (
  `id_legal_status_pk` int(11) NOT NULL,
  `label` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `legal_status`
--

INSERT INTO `legal_status` (`id_legal_status_pk`, `label`, `description`) VALUES
(1, 'SPRL', ''),
(2, 'SA', '');

-- --------------------------------------------------------

--
-- Table structure for table `path_steps`
--

CREATE TABLE `path_steps` (
  `id_path_step_pk` int(11) NOT NULL,
  `label` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `path_steps`
--

INSERT INTO `path_steps` (`id_path_step_pk`, `label`, `description`, `rank`) VALUES
(1, 'I wish become self-employee', '', 1),
(2, 'I wish to take over a business', '', 2),
(3, 'My business project is validated', '', 3),
(4, 'My business is growing', '', 4),
(5, 'I\'m hiring staff', '', 5),
(6, 'I manage my collaborators', '', 6),
(7, 'I give in to my business', '', 7),
(8, 'I\'m reaching retirement age', '', 8);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id_question_pk` int(11) NOT NULL,
  `question` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `user_fk` int(11) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('sent','pending','published','aborted') COLLATE utf8_unicode_ci NOT NULL,
  `comments` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id_question_pk`, `question`, `user_fk`, `creation_date`, `status`, `comments`) VALUES
(1, 'Dois-je avoir un business plan ou un plan financier pour me lancer ? ', 1, '2019-10-25 15:59:11', 'sent', ''),
(2, 'J\'exerce une profession libérale, dois-je disposer d\'un numéro d\'entreprise ?', 1, '2019-10-25 15:59:44', 'sent', '');

-- --------------------------------------------------------

--
-- Table structure for table `questions_x_claims`
--

CREATE TABLE `questions_x_claims` (
  `id_claim_fk` int(11) NOT NULL,
  `id_question_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `self_employed_status`
--

CREATE TABLE `self_employed_status` (
  `id_self_employed_status_pk` int(11) NOT NULL,
  `label` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `self_employed_status`
--

INSERT INTO `self_employed_status` (`id_self_employed_status_pk`, `label`, `description`) VALUES
(1, 'Full self-employed', ''),
(2, 'Complementary self-employed', '');

-- --------------------------------------------------------

--
-- Table structure for table `users_table`
--

CREATE TABLE `users_table` (
  `id_user_pk` int(11) NOT NULL,
  `email` varchar(350) COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_path_step_fk` int(11) NOT NULL,
  `id_job_domain_fk` int(11) NOT NULL,
  `id_self_employed_status_fk` int(11) DEFAULT NULL,
  `id_legal_status_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users_table`
--

INSERT INTO `users_table` (`id_user_pk`, `email`, `login`, `password`, `creation_date`, `id_path_step_fk`, `id_job_domain_fk`, `id_self_employed_status_fk`, `id_legal_status_fk`) VALUES
(1, 'serge.bayet1975@gmail.com', 'Serge', 'test', '2019-10-25 15:58:35', 1, 8, 2, 1),
(2, 'caroline.ziane@gmail.com', 'caroline', 'test', '2019-10-25 16:02:43', 6, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_x_user_types`
--

CREATE TABLE `users_x_user_types` (
  `id_user_fk` int(11) NOT NULL,
  `id_user_type_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users_x_user_types`
--

INSERT INTO `users_x_user_types` (`id_user_fk`, `id_user_type_fk`) VALUES
(1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `id_user_type_pk` int(11) NOT NULL,
  `label` varchar(64) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user_types`
--

INSERT INTO `user_types` (`id_user_type_pk`, `label`) VALUES
(5, 'community'),
(6, 'specialist'),
(7, 'administrator'),
(8, 'translator');

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id_vote_pk` int(11) NOT NULL,
  `type` enum('up-vote','down-vote') COLLATE utf8_unicode_ci NOT NULL,
  `id_answer_fk` int(11) NOT NULL,
  `id_user_fk` int(11) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`id_vote_pk`, `type`, `id_answer_fk`, `id_user_fk`, `creation_date`) VALUES
(1, 'up-vote', 1, 1, '2019-10-25 16:05:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id_answer_pk`);

--
-- Indexes for table `answers_x_categories`
--
ALTER TABLE `answers_x_categories`
  ADD PRIMARY KEY (`id_categorie_fk`,`id_answer_fk`),
  ADD KEY `id_answer_fk` (`id_answer_fk`);

--
-- Indexes for table `answers_x_job_domains`
--
ALTER TABLE `answers_x_job_domains`
  ADD PRIMARY KEY (`id_job_domain_fk`,`id_answer_fk`),
  ADD KEY `id_answer_fk` (`id_answer_fk`);

--
-- Indexes for table `answers_x_path_steps`
--
ALTER TABLE `answers_x_path_steps`
  ADD PRIMARY KEY (`id_path_step_fk`,`id_answer_fk`),
  ADD KEY `id_answer_fk` (`id_answer_fk`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categorie_pk`);

--
-- Indexes for table `claims`
--
ALTER TABLE `claims`
  ADD PRIMARY KEY (`id_claim_pk`),
  ADD KEY `id_question_fk` (`id_question_fk`);

--
-- Indexes for table `job_domains`
--
ALTER TABLE `job_domains`
  ADD PRIMARY KEY (`id_job_domain_pk`);

--
-- Indexes for table `legal_status`
--
ALTER TABLE `legal_status`
  ADD PRIMARY KEY (`id_legal_status_pk`);

--
-- Indexes for table `path_steps`
--
ALTER TABLE `path_steps`
  ADD PRIMARY KEY (`id_path_step_pk`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id_question_pk`);

--
-- Indexes for table `questions_x_claims`
--
ALTER TABLE `questions_x_claims`
  ADD PRIMARY KEY (`id_claim_fk`,`id_question_fk`),
  ADD KEY `id_question_fk` (`id_question_fk`);

--
-- Indexes for table `self_employed_status`
--
ALTER TABLE `self_employed_status`
  ADD PRIMARY KEY (`id_self_employed_status_pk`);

--
-- Indexes for table `users_table`
--
ALTER TABLE `users_table`
  ADD PRIMARY KEY (`id_user_pk`),
  ADD KEY `id_job_domain_fk` (`id_job_domain_fk`),
  ADD KEY `id_legal_status_fk` (`id_legal_status_fk`),
  ADD KEY `id_path_step_fk` (`id_path_step_fk`),
  ADD KEY `id_self_employed_status_fk` (`id_self_employed_status_fk`);

--
-- Indexes for table `users_x_user_types`
--
ALTER TABLE `users_x_user_types`
  ADD PRIMARY KEY (`id_user_fk`,`id_user_type_fk`),
  ADD KEY `id_user_type_fk` (`id_user_type_fk`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`id_user_type_pk`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id_vote_pk`),
  ADD KEY `id_answer_fk` (`id_answer_fk`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id_answer_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_categorie_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `claims`
--
ALTER TABLE `claims`
  MODIFY `id_claim_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job_domains`
--
ALTER TABLE `job_domains`
  MODIFY `id_job_domain_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `legal_status`
--
ALTER TABLE `legal_status`
  MODIFY `id_legal_status_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `path_steps`
--
ALTER TABLE `path_steps`
  MODIFY `id_path_step_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id_question_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `self_employed_status`
--
ALTER TABLE `self_employed_status`
  MODIFY `id_self_employed_status_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_table`
--
ALTER TABLE `users_table`
  MODIFY `id_user_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `id_user_type_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id_vote_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers_x_categories`
--
ALTER TABLE `answers_x_categories`
  ADD CONSTRAINT `answers_x_categories_ibfk_1` FOREIGN KEY (`id_answer_fk`) REFERENCES `answers` (`id_answer_pk`),
  ADD CONSTRAINT `answers_x_categories_ibfk_2` FOREIGN KEY (`id_categorie_fk`) REFERENCES `categories` (`id_categorie_pk`);

--
-- Constraints for table `answers_x_job_domains`
--
ALTER TABLE `answers_x_job_domains`
  ADD CONSTRAINT `answers_x_job_domains_ibfk_1` FOREIGN KEY (`id_answer_fk`) REFERENCES `answers` (`id_answer_pk`),
  ADD CONSTRAINT `answers_x_job_domains_ibfk_2` FOREIGN KEY (`id_job_domain_fk`) REFERENCES `job_domains` (`id_job_domain_pk`);

--
-- Constraints for table `answers_x_path_steps`
--
ALTER TABLE `answers_x_path_steps`
  ADD CONSTRAINT `answers_x_path_steps_ibfk_1` FOREIGN KEY (`id_answer_fk`) REFERENCES `answers` (`id_answer_pk`),
  ADD CONSTRAINT `answers_x_path_steps_ibfk_2` FOREIGN KEY (`id_path_step_fk`) REFERENCES `path_steps` (`id_path_step_pk`);

--
-- Constraints for table `claims`
--
ALTER TABLE `claims`
  ADD CONSTRAINT `claims_ibfk_1` FOREIGN KEY (`id_question_fk`) REFERENCES `questions` (`id_question_pk`);

--
-- Constraints for table `questions_x_claims`
--
ALTER TABLE `questions_x_claims`
  ADD CONSTRAINT `questions_x_claims_ibfk_1` FOREIGN KEY (`id_claim_fk`) REFERENCES `claims` (`id_claim_pk`),
  ADD CONSTRAINT `questions_x_claims_ibfk_2` FOREIGN KEY (`id_question_fk`) REFERENCES `questions` (`id_question_pk`);

--
-- Constraints for table `users_table`
--
ALTER TABLE `users_table`
  ADD CONSTRAINT `users_table_ibfk_1` FOREIGN KEY (`id_job_domain_fk`) REFERENCES `job_domains` (`id_job_domain_pk`),
  ADD CONSTRAINT `users_table_ibfk_2` FOREIGN KEY (`id_legal_status_fk`) REFERENCES `legal_status` (`id_legal_status_pk`),
  ADD CONSTRAINT `users_table_ibfk_3` FOREIGN KEY (`id_path_step_fk`) REFERENCES `path_steps` (`id_path_step_pk`),
  ADD CONSTRAINT `users_table_ibfk_4` FOREIGN KEY (`id_self_employed_status_fk`) REFERENCES `self_employed_status` (`id_self_employed_status_pk`);

--
-- Constraints for table `users_x_user_types`
--
ALTER TABLE `users_x_user_types`
  ADD CONSTRAINT `users_x_user_types_ibfk_2` FOREIGN KEY (`id_user_type_fk`) REFERENCES `user_types` (`id_user_type_pk`);

--
-- Constraints for table `votes`
--
ALTER TABLE `votes`
  ADD CONSTRAINT `votes_ibfk_1` FOREIGN KEY (`id_answer_fk`) REFERENCES `answers` (`id_answer_pk`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
